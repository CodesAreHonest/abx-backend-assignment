import { Column, Entity, Index, ManyToMany } from 'typeorm';
import { TrackEntity } from '../tracks/tracks.entity';

@Index('IPK_Playlist', ['playlistId'], { unique: true })
@Entity('Playlist')
export class PlaylistEntity {
  @Column('integer', { primary: true, name: 'PlaylistId', unique: true })
  playlistId: number;

  @Column('nvarchar', { name: 'Name', nullable: true, length: 120 })
  name: string | null;

  @ManyToMany(() => TrackEntity, (track) => track.playlists)
  tracks: TrackEntity[];

  constructor(partial: Partial<PlaylistEntity[]>) {
    Object.assign(this, partial);
  }
}
