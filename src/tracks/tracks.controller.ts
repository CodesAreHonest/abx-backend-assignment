import {
  ClassSerializerInterceptor,
  Controller,
  Get,
  Query,
  UseInterceptors,
} from '@nestjs/common';
import { GetTrackCountDto } from './dto/get-count.dto';
import { GetTrackDto } from './dto/get-track.dto';
import { TrackEntity } from './tracks.entity';
import { TracksService } from './tracks.service';

@Controller('tracks')
export class TracksController {
  constructor(private readonly trackService: TracksService) {}

  @UseInterceptors(ClassSerializerInterceptor)
  @Get('/')
  async getList(@Query() trackData: GetTrackDto) : Promise<TrackEntity> {
    const track = await this.trackService.findOne(trackData);
    return new TrackEntity(track);
  }

  @Get("/count")
  async getCounts(@Query() playlistNameData: GetTrackCountDto) {
    
  }


}
