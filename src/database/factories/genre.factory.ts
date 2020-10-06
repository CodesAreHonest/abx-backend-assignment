import Faker from 'faker';
import { GenreEntity } from '../../tracks/genre.entity';
import { define } from 'typeorm-seeding';

define(GenreEntity, (faker: typeof Faker) => {
  const genreName: string = faker.commerce.color();

  const genreEntity = new GenreEntity();
  genreEntity.name = genreName.toUpperCase();

  return genreEntity;
});
