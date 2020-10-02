import { IsNotEmpty, IsString } from 'class-validator';

export class GetTrackDto {
  @IsNotEmpty()
  @IsString()
  readonly name: string;
}