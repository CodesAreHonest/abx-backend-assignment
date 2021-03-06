import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TrackEntity } from './tracks.entity';

@Index('IPK_MediaType', ['mediaTypeId'], { unique: true })
@Entity('MediaType')
export class MediaTypeEntity {
  @Column('integer', { primary: true, name: 'MediaTypeId', unique: true })
  mediaTypeId: number;

  @Column('nvarchar', { name: 'Name', nullable: true, length: 120 })
  name: string | null;

  @OneToMany(() => TrackEntity, (track) => track.mediaType)
  tracks: TrackEntity[];
}
