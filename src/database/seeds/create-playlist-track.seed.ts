import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from "typeorm";

class CreatePlaylistTrackSeed implements Seeder {
    public async run(factory: Factory, connection: Connection): Promise<void> {

        for (let i = 1; i <= 10000000; i++) {
            await connection.query(`INSERT INTO PlaylistTrack(PlaylistId, TrackId)
                              SELECT playlistId, trackId FROM
                             (SELECT 1 + ABS(RANDOM() % MAX(Playlist.PlaylistId)) AS playlistId FROM Playlist),
                             (SELECT 1 + ABS(RANDOM() % MAX(Track.TrackId)) AS trackId FROM Track);`);
        }

    }
}

export default CreatePlaylistTrackSeed;
