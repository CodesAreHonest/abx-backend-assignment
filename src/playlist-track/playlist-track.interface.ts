import { TrackEntity } from 'src/tracks/tracks.entity';

export interface PlaylistTrackEntity {
  playlistId: number;
  name: string;
  tracks: TrackEntity[];
}
