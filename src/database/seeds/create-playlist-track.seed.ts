import { PlaylistTrackEntity } from 'src/playlist-track/playlist-track.entity';
import { Factory, Seeder } from 'typeorm-seeding';

class CreatePlaylistTrack implements Seeder {
  public async run(factory: Factory): Promise<void> {
    const _playlistTrackFactory = factory(PlaylistTrackEntity)();
    await _playlistTrackFactory.createMany(2);
  }
}

export default CreatePlaylistTrack;
