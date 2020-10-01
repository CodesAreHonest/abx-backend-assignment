import { Column, Entity, Index, ManyToMany } from "typeorm";
import { Track } from "./Track";

@Entity("Playlist")
export class Playlist {
    @Index("IPK_Playlist", ["playlistId"], { unique: true })
    @Column("integer", { primary: true, name: "PlaylistId", unique: true })
    playlistId: number;

    @Column("nvarchar", { name: "Name", nullable: true, length: 120 })
    name: string | null;

    @ManyToMany(() => Track, (track) => track.playlists)
    tracks: Track[];
}
