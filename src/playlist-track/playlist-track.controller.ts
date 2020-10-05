import {
  ClassSerializerInterceptor,
  Controller,
  Get,
  Query,
  UseInterceptors,
} from '@nestjs/common';
import { GetPlaylistTrackDto } from './dto/get-playlist-track-dto';
import { GetTrackCountDto } from './dto/get-track-count-dto';
import { PlaylistTrackService } from './playlist-track.service';
import { PlaylistEntity } from './playlist.entity';

@Controller('playlist-track')
export class PlaylistTrackController {
  constructor(private readonly playlistTrackService: PlaylistTrackService) {}

  @Get('/count')
  getTrackCount(@Query() getTrackCountDto: GetTrackCountDto): Promise<number> {
    const { playlistName } = getTrackCountDto;
    const playlist = this.playlistTrackService.getTrackCount(playlistName);
    return playlist;
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Get('/')
  async getPlaylistTrack(
    @Query() getPlaylistTrackDto: GetPlaylistTrackDto,
  ): Promise<PlaylistEntity[]> {
    const { playlist, track } = getPlaylistTrackDto;
    const _playlistTrack = await this.playlistTrackService.getAllWithTrackAndPlaylist(
      playlist,
      track,
    );

    return _playlistTrack;
  }
}
