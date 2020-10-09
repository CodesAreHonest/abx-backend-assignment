import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from "typeorm";

class CreatePlaylistTrackSeed implements Seeder {
    public async run(factory: Factory, connection: Connection): Promise<void> {

        for (let i = 1; i <= 1000000; i ++) {
            await connection.query(`INSERT INTO PlaylistTrack(playlistid, trackid)
                                    SELECT playlist.playlistId, track.trackId
                                    FROM (
                                           select 1 + (ABS(RANDOM() % MAX(Playlist.PlaylistId))) AS playlistId from Playlist) as playlist,
                                         (select 1 + (ABS(RANDOM() % MAX(Track.TrackId))) AS trackId from Track) as track;
            `);
        }
    }
}

export default CreatePlaylistTrackSeed;
