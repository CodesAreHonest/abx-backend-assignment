import { Body, Controller, Get } from '@nestjs/common';
import { TracksService } from './tracks.service';

@Controller('tracks')
export class TracksController {
  constructor(private readonly trackService: TracksService) {}

  @Get('/')
  async getList(@Body('name') name: string) {
    return this.trackService.findOne(name);
  }
}
