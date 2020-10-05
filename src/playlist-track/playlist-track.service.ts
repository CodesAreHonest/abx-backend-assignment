import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PlaylistTrackEntity } from './playlist-track.interface';
import { PlaylistEntity } from './playlist.entity';

@Injectable()
export class PlaylistTrackService {
  constructor(
    @InjectRepository(PlaylistEntity)
    private readonly playlistRepository: Repository<PlaylistEntity>,
  ) {}

  /**
   * @description
   * Obtain track count with given playlist name
   *
   * @param {string} name
   * @returns {Promise<number>}
   *
   * @tutorial
   * https://github.com/typeorm/typeorm/issues/1231
   */
  getTrackCount = async (name: string): Promise<number> => {
    const _playlist: PlaylistTrackEntity = await this.playlistRepository
      .createQueryBuilder('playlist')
      .where('LOWER(playlist.name) = :name', { name: name.toLowerCase() })
      .leftJoinAndSelect('playlist.tracks', 'tracks')
      .getOne();

    if (!_playlist) {
      throw new HttpException(
        'Playlist not found with given name',
        HttpStatus.NOT_FOUND,
      );
    }

    const tracksCount: number = _playlist.tracks.length;
    return tracksCount;
  };

  /**
   * @description
   * Get track entity with playlist name and track name
   *
   * @param {string} playlistName
   * @param {string} trackName
   * @returns {Promise<PlaylistTrackEntity[]>}
   */
  getAllWithTrackAndPlaylist = async (
    playlistName: string,
    trackName: string,
  ): Promise<PlaylistTrackEntity[]> => {
    const _trackWithPlaylist = await this.playlistRepository
      .createQueryBuilder('playlist')
      .leftJoinAndSelect('playlist.tracks', 'tracks')
      .where('playlist.name = :playlistName COLLATE NOCASE', { playlistName })
      .andWhere('tracks.name = :trackName COLLATE NOCASE', { trackName })
      .getMany();

    if (!_trackWithPlaylist) {
      throw new HttpException(
        'Track is not found with given track name and playlist name',
        HttpStatus.NOT_FOUND,
      );
    }

    return _trackWithPlaylist;
  };
}
