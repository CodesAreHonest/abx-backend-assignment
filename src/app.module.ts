import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TracksModule } from './tracks/tracks.module';
import { PlaylistTrackModule } from './playlist-track/playlist-track.module';

@Module({
  imports: [TypeOrmModule.forRoot(), TracksModule, PlaylistTrackModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
