import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { DiscussionsService } from './discussions.service';
import { CreateDiscussionDto } from './dto/create-discussion.dto';

@Controller('discussions')
export class DiscussionsController {
  constructor(private readonly discussionsService: DiscussionsService) {}

  @Post()
  create(@Body() createDiscussionDto: CreateDiscussionDto) {
    return this.discussionsService.create(createDiscussionDto);
  }

  @Get()
  findAll() {
    return this.discussionsService.findAll();
  }

  @Get('/post/:id')
  findByPostId(@Param('id') id: string) {
    return this.discussionsService.findByPostId(+id);
  }
}
