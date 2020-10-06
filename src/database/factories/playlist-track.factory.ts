import Faker from 'faker';
import { PlaylistTrackEntity } from 'src/playlist-track/playlist-track.entity';
import { PlaylistEntity } from 'src/playlist-track/playlist.entity';
import { TrackEntity } from 'src/tracks/tracks.entity';
import { define, factory } from 'typeorm-seeding';

define(PlaylistTrackEntity, () => {
  const _playlistTrack = new PlaylistTrackEntity();
  const playlistFactory = factory(PlaylistEntity)() as any;
  _playlistTrack.playlist = playlistFactory;
  _playlistTrack.trackId = factory(TrackEntity)() as any;

  return _playlistTrack;
});
