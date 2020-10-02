import { Module } from '@nestjs/common';
import { TracksController } from './tracks.controller';
import { TracksService } from './tracks.service';

import { TypeOrmModule } from '@nestjs/typeorm';
import { TrackEntity } from './tracks.entity';
import { GenreEntity } from './genre.entity';
import { MediaTypeEntity } from './mediaType.entity';
import { PlaylistEntity } from './playlist.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      TrackEntity,
      GenreEntity,
      MediaTypeEntity,
      PlaylistEntity,
    ]),
  ],
  controllers: [TracksController],
  providers: [TracksService],
})
export class TracksModule {}
