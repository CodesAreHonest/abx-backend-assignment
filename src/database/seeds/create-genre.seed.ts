import { GenreEntity } from '../../tracks/genre.entity';
import { Factory, Seeder } from 'typeorm-seeding';

export default class CreateGenre implements Seeder {
  public async run(factory: Factory): Promise<void> {
    const genreEntityFactory = factory(GenreEntity)();
    await genreEntityFactory.createMany(50);
  }
}
