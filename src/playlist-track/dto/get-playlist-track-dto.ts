import { IsNotEmpty, IsString } from 'class-validator';

export class GetPlaylistTrackDto {
  @IsNotEmpty()
  @IsString()
  readonly playlist: string;

  @IsNotEmpty()
  @IsString()
  readonly track: string;
}
