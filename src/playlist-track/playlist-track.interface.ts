import { TrackEntity } from 'src/tracks/tracks.entity';

export interface PlaylistTrackInterface {
  playlistId: number;
  name: string;
  tracks: TrackEntity[];
}
