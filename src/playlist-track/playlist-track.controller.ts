import { Controller, Get, Query } from '@nestjs/common';
import { GetTrackCountDto } from './dto/get-track-count-dto';
import { PlaylistTrackEntity } from './playlist-track.interface';
import { PlaylistTrackService } from './playlist-track.service';
import { PlaylistEntity } from './playlist.entity';

@Controller('playlist-track')
export class PlaylistTrackController {
    constructor(private readonly playlistTrackService: PlaylistTrackService) {}

    @Get('/count')
    getTrackCount(@Query() getTrackCountDto: GetTrackCountDto) : Promise<number> {
        const { playlistName } = getTrackCountDto;
        const playlist = this.playlistTrackService.getTrackCount(playlistName);
        return playlist;
    }
}
