import { TrackEntity } from 'src/tracks/tracks.entity';
import { Factory, Seeder } from 'typeorm-seeding';

class CreateTrack implements Seeder {
  public async run(factory: Factory): Promise<void> {
    const trackEntityFactory = factory(TrackEntity)();
    await trackEntityFactory.createMany(2);
  }
}

export default CreateTrack;
