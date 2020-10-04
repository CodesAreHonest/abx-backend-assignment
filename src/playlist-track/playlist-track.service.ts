import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PlaylistTrackEntity } from './playlist-track.interface';
import { PlaylistEntity } from './playlist.entity';

@Injectable()
export class PlaylistTrackService {
    constructor(
        @InjectRepository(PlaylistEntity)
        private readonly playlistRepository: Repository<PlaylistEntity>
    ) {}

    async getTrackCount(name: string) : Promise<number> {
        const _playlist: PlaylistTrackEntity = await this.playlistRepository.findOne({
            where: {name},
            relations: ["tracks"],
        });

        if (!_playlist) {
            throw new HttpException(
                "Playlist not found with given name",
                HttpStatus.NOT_FOUND
            )
        }

        return _playlist.tracks.length;;
    }
}
