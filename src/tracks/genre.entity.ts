import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TrackEntity } from './tracks.entity';

@Index('IPK_Genre', ['genreId'], { unique: true })
@Entity('Genre')
export class GenreEntity {
  @Column('integer', { primary: true, name: 'GenreId', unique: true })
  genreId: number;

  @Column('nvarchar', { name: 'Name', nullable: true, length: 120 })
  name: string | null;

  @OneToMany(() => TrackEntity, (track) => track.genre)
  tracks: TrackEntity[];
}
``;
