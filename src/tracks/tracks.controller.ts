import { ClassSerializerInterceptor, Controller, Get, Query, UseInterceptors } from '@nestjs/common';
import { TrackEntity } from './track.entity';
import { TracksService } from './tracks.service';

@Controller('tracks')
export class TracksController {
  constructor(private readonly trackService: TracksService) {}

  @UseInterceptors(ClassSerializerInterceptor)
  @Get('/')
  async getList(@Query('name') name: string) {
    const track = await this.trackService.findOne(name);
    return new TrackEntity(track); 
  }
}
