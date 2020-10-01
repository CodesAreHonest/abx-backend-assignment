import { Column, Entity, Index, OneToMany } from "typeorm";
import { Track } from "./Track";

@Entity("Genre")
export class Genre {
    @Index("IPK_Genre", ["genreId"], { unique: true })
    @Column("integer", { primary: true, name: "GenreId", unique: true })
    genreId: number;

    @Column("nvarchar", { name: "Name", nullable: true, length: 120 })
    name: string | null;

    @OneToMany(() => Track, (track) => track.genre)
    tracks: Track[];
}
