import Faker from 'faker';
import { TrackEntity } from 'src/tracks/tracks.entity';
import { define } from 'typeorm-seeding';

define(TrackEntity, (faker: typeof Faker) => {
  const trackName: string = faker.commerce.productName();
  const mediaTypeId = faker.random.number({ min: 1, max: 5 });
  const genreId = faker.random.number({ min: 1, max: 25 });
  const composerName = `${faker.name.firstName()} ${faker.name.lastName()}`;
  const milliseconds: number = faker.random.number({
    min: 200000,
    max: 500000,
  });
  const bytes: number = faker.random.number({
    min: 2000000,
    max: 8500000,
  });
  const unitPrice: number = faker.random.number({
    min: 0.2,
    max: 2.0,
    precision: 0.01,
  });

  const trackEntity = new TrackEntity({});
  trackEntity.name = trackName;
  trackEntity.mediaTypeId = mediaTypeId;
  trackEntity.genreId = genreId;
  trackEntity.composer = composerName;
  trackEntity.milliseconds = milliseconds;
  trackEntity.bytes = bytes;
  trackEntity.unitPrice = unitPrice;

  return trackEntity;
});
