import { Column, Entity, Index, OneToMany } from "typeorm";
import { Track } from "../src/tracks/tracks.entity";

@Index("IPK_MediaType", ["mediaTypeId"], { unique: true })
@Entity("MediaType")
export class MediaType {
  @Column("integer", { primary: true, name: "MediaTypeId", unique: true })
  mediaTypeId: number;

  @Column("nvarchar", { name: "Name", nullable: true, length: 120 })
  name: string | null;

  @OneToMany(() => Track, (track) => track.mediaType)
  tracks: Track[];
}
