import { IsNotEmpty, IsString } from 'class-validator';

export class GetTrackCountDto {
  @IsNotEmpty()
  @IsString()
  readonly playlistName: string;
}
