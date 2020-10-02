import { Track as TrackEntity } from './tracks.entity';

export interface TrackData {
  TrackId: number;
  Name: string;
  MediaTypeId: number;
  GenreId: number;
  Composer: string;
  Milliseconds: number;
  Bytes: number;
  UnitPrice: number;
}

export interface TrackReturnObject {
  track: TrackEntity;
}
