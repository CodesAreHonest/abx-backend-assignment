import {
  Column,
  Entity,
  Index,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
} from 'typeorm';
import { PlaylistEntity } from '../playlist-track/playlist.entity';
import { GenreEntity } from './genre.entity';
import { MediaTypeEntity } from './mediaType.entity';

import { Exclude } from 'class-transformer';

@Index('IPK_Track', ['trackId'], { unique: true })
@Index('IFK_TrackMediaTypeId', ['mediaTypeId'], {})
@Index('IFK_TrackGenreId', ['genreId'], {})
@Entity('Track')
export class TrackEntity {
  @Exclude()
  @Column('integer', { primary: true, name: 'TrackId', unique: true })
  trackId: number;

  @Column('nvarchar', { name: 'Name', length: 200 })
  name: string;

  @Exclude()
  @Column('integer', { name: 'MediaTypeId' })
  mediaTypeId: number;

  @Exclude()
  @Column('integer', { name: 'GenreId' })
  genreId: number;

  @Column('nvarchar', { name: 'Composer', nullable: true, length: 220 })
  composer: string | null;

  @Column('integer', { name: 'Milliseconds' })
  milliseconds: number;

  @Column('integer', { name: 'Bytes', nullable: true })
  bytes: number | null;

  @Column('numeric', { name: 'UnitPrice', precision: 10, scale: 2 })
  unitPrice: number;

  @ManyToMany(() => PlaylistEntity, (playlist) => playlist.tracks)
  @JoinTable({
    name: 'PlaylistTrack',
    joinColumns: [{ name: 'TrackId', referencedColumnName: 'trackId' }],
    inverseJoinColumns: [
      { name: 'PlaylistId', referencedColumnName: 'playlistId' },
    ],
  })
  playlists: PlaylistEntity[];

  @ManyToOne(() => GenreEntity, (genre) => genre.tracks)
  @JoinColumn([{ name: 'GenreId', referencedColumnName: 'genreId' }])
  genre: GenreEntity;

  @ManyToOne(() => MediaTypeEntity, (mediaType) => mediaType.tracks)
  @JoinColumn([{ name: 'MediaTypeId', referencedColumnName: 'mediaTypeId' }])
  mediaType: MediaTypeEntity;

  constructor(partial: Partial<TrackEntity>) {
    Object.assign(this, partial);
  }
}
