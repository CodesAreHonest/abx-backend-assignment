import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Raw, Repository } from 'typeorm';
import { GetTrackDto } from './dto/get-track.dto';

import { TrackEntity } from './tracks.entity';

@Injectable()
export class TracksService {
  constructor(
    @InjectRepository(TrackEntity)
    private readonly trackRepository: Repository<TrackEntity>,
  ) {}

  /**
   * @param getTrackDto GetTrackDto
   * @returns _track Promise<TrackEntity>
   *
   * @tutorial
   * https://stackoverflow.com/questions/973541/how-to-set-sqlite3-to-be-case-insensitive-when-string-comparing
   */
  async findOne(getTrackDto: GetTrackDto): Promise<TrackEntity> {
    const { name } = getTrackDto;

    const _track = await this.trackRepository
      .createQueryBuilder('track')
      .where('track.name = :name COLLATE NOCASE', { name: name.toLowerCase() })
      .leftJoinAndSelect('track.playlists', 'playlists')
      .leftJoinAndSelect('track.genre', 'genre')
      .leftJoinAndSelect('track.mediaType', 'mediaType')
      .getOne();

    if (!_track) {
      throw new HttpException(
        'Track not found with given name.',
        HttpStatus.NOT_FOUND,
      );
    }

    return _track;
  }
}
