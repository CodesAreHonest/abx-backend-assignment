import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GetTrackDto } from './dto/get-track.dto';

import { TrackEntity } from './tracks.entity';

@Injectable()
export class TracksService {
  constructor(
    @InjectRepository(TrackEntity)
    private readonly trackRepository: Repository<TrackEntity>,
  ) {}

  async findOne(getTrackDto: GetTrackDto): Promise<TrackEntity> {
    const { name } = getTrackDto;
    const _track = await this.trackRepository.findOne(
      { name },
      { relations: ['playlists', 'genre', 'mediaType'] },
    );

    if (!_track) {
      throw new HttpException(
        'Track not found with given name.',
        HttpStatus.NOT_FOUND,
      );
    }

    return _track;
  }
}
