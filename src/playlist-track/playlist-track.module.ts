import { Module } from '@nestjs/common';
import { PlaylistTrackController } from './playlist-track.controller';
import { PlaylistTrackService } from './playlist-track.service';

import { TypeOrmModule } from '@nestjs/typeorm';
import { PlaylistEntity } from './playlist.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PlaylistEntity])],
  controllers: [PlaylistTrackController],
  providers: [PlaylistTrackService]
})
export class PlaylistTrackModule {}
