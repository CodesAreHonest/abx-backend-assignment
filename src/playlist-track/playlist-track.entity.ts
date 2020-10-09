import { TrackEntity } from 'src/tracks/tracks.entity';
import { Entity, Index, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { PlaylistEntity } from './playlist.entity';

@Entity('PlaylistTrack')
@Index('IPK_PlaylistTrack', ['playlistId', 'trackId'], { unique: true })
export class PlaylistTrackEntity {
  @PrimaryColumn('integer', { name: 'PlaylistId' })
  playlistId: number;

  @PrimaryColumn('integer', { name: 'TrackId' })
  trackId: number;

  @ManyToOne(() => PlaylistEntity, (playlist) => playlist.playlistId)
  @JoinColumn([{ name: 'PlaylistId', referencedColumnName: 'playlistId' }])
  playlist: PlaylistEntity;

  @ManyToOne(() => TrackEntity, (track) => track.trackId)
  @JoinColumn([{ name: 'TrackId', referencedColumnName: 'trackId' }])
  track: TrackEntity;
}
