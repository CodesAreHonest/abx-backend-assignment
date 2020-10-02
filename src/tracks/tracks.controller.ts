import {
  ClassSerializerInterceptor,
  Controller,
  Get,
  Query,
  UseInterceptors,
} from '@nestjs/common';
import { GetTrackDto } from './dto/get-track.dto';
import { TrackEntity } from './track.entity';
import { TracksService } from './tracks.service';

@Controller('tracks')
export class TracksController {
  constructor(private readonly trackService: TracksService) {}

  @UseInterceptors(ClassSerializerInterceptor)
  @Get('/')
  async getList(@Query() trackData: GetTrackDto) {
    const track = await this.trackService.findOne(trackData);
    return new TrackEntity(track);
  }
}
