import { PlaylistEntity } from 'src/playlist-track/playlist.entity';
import { Factory, Seeder } from 'typeorm-seeding';

class CreatePlaylist implements Seeder {
  public async run(factory: Factory): Promise<void> {
    const playlistFactory = factory(PlaylistEntity)();
    // await playlistFactory.createMany(150000);
    await playlistFactory.createMany(1);
  }
}

export default CreatePlaylist;
