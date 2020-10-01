import {
    Column,
    Entity,
    Index,
    JoinColumn,
    JoinTable,
    ManyToMany,
    ManyToOne,
} from "typeorm";
import { Playlist } from "./Playlist";
import { MediaType } from "./MediaType";
import { Genre } from "./Genre";

@Entity("Track")
export class Track {
    @Index("IPK_Track", ["trackId"], { unique: true })
    @Column("integer", { primary: true, name: "TrackId", unique: true })
    trackId: number;

    @Column("nvarchar", { name: "Name", length: 200 })
    name: string;

    @Index("IFK_TrackAlbumId", ["albumId"], {})
    @Column("integer", { name: "AlbumId", nullable: true })
    albumId: number | null;

    @Index("IFK_TrackMediaTypeId", ["mediaTypeId"], {})
    @Column("integer", { name: "MediaTypeId" })
    mediaTypeId: number;

    @Index("IFK_TrackGenreId", ["genreId"], {})
    @Column("integer", { name: "GenreId", nullable: true })
    genreId: number | null;

    @Column("nvarchar", { name: "Composer", nullable: true, length: 220 })
    composer: string | null;

    @Column("integer", { name: "Milliseconds" })
    milliseconds: number;

    @Column("integer", { name: "Bytes", nullable: true })
    bytes: number | null;

    @Column("numeric", { name: "UnitPrice", precision: 10, scale: 2 })
    unitPrice: number;

    @ManyToMany(() => Playlist, (playlist) => playlist.tracks)
    @JoinTable({
        name: "Track",
        joinColumns: [{ name: "TrackId", referencedColumnName: "trackId" }],
        inverseJoinColumns: [
            { name: "PlaylistId", referencedColumnName: "playlistId" },
        ],
    })
    playlists: Playlist[];

    @ManyToOne(() => MediaType, (mediaType) => mediaType.tracks)
    @JoinColumn([{ name: "MediaTypeId", referencedColumnName: "mediaTypeId" }])
    mediaType: MediaType;

    @ManyToOne(() => Genre, (genre) => genre.tracks)
    @JoinColumn([{ name: "GenreId", referencedColumnName: "genreId" }])
    genre: Genre;
}
