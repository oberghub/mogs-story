import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  UseGuards,
  Res,
  Request,
} from '@nestjs/common';
import { StoriesService } from './stories.service';
import { CreateStoryDto } from './dto/create-story.dto';
import { UpdateStoryDto } from './dto/update-story.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('stories')
export class StoriesController {
  constructor(private readonly storiesService: StoriesService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createStoryDto: CreateStoryDto) {
    return this.storiesService.create(createStoryDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.storiesService.findAll();
  }

  @Get('story')
  findOne(@Query('id') id: string) {
    return this.storiesService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Get('user')
  findByUserName(@Request() req) {
    return this.storiesService.findByUserName(req.user.userName);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStoryDto: UpdateStoryDto) {
    return this.storiesService.update(id, updateStoryDto);
  }

  // @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.storiesService.remove(id);
  }
}
