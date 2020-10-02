import { ClassSerializerInterceptor, HttpException, HttpStatus, Injectable, UseInterceptors } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { TrackEntity } from './track.entity';
import { TrackReturnObject } from './tracks.interface';

@Injectable()
export class TracksService {
  constructor(
    @InjectRepository(TrackEntity)
    private readonly trackRepository: Repository<TrackEntity>,
  ) {}

  async findOne(name: string): Promise<TrackEntity> {
    const _track = await this.trackRepository.findOne({ name }, {relations: ["playlists", "genre", "mediaType"]});

    if (!_track) {
      throw new HttpException(
        'Track not found with given name.',
        HttpStatus.NOT_FOUND,
      );
    }

    return _track;
  }
}
