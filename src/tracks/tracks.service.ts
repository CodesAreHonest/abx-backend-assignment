import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
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

  async findOne(name: string): Promise<TrackReturnObject> {
    const _track = await this.trackRepository.findOne({ name });

    if (!_track) {
      throw new HttpException(
        'TrackEntity not found with given name.',
        HttpStatus.NOT_FOUND,
      );
    }

    const returnObject: TrackReturnObject = {
      track: _track,
    };

    return returnObject;
  }
}
