import Faker from 'faker';
import { PlaylistEntity } from 'src/playlist-track/playlist.entity';
import { define } from 'typeorm-seeding';

define(PlaylistEntity, (faker: typeof Faker) => {
  const playlistName: string = faker.commerce.product();

  const _playlistEntity = new PlaylistEntity();
  _playlistEntity.name = playlistName;

  return _playlistEntity;
});
