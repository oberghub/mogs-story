import { Injectable } from '@nestjs/common';
import { CreateStoryDto } from './dto/create-story.dto';
import { UpdateStoryDto } from './dto/update-story.dto';
import { Stories, StoriesDocument } from './schema/stories.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class StoriesService {
  constructor(
    @InjectModel(Stories.name) private storiesModel: Model<StoriesDocument>,
  ) {}
  async create(createStoryDto: CreateStoryDto): Promise<Stories> {
    const result = new this.storiesModel(createStoryDto);
    return result.save();
  }

  async findAll(): Promise<Stories[]> {
    return this.storiesModel.find().exec();
  }

  async findOne(id: string): Promise<Stories> {
    return this.storiesModel.findById(id).exec();
  }

  async findByUserName(username: string): Promise<Stories[]> {
    return this.storiesModel.find({ byUserId: username });
  }

  async update(id: string, updateStoryDto: UpdateStoryDto) {
    const result = await this.storiesModel.updateOne(updateStoryDto);
    return result;
  }

  async remove(id: string) {
    const result = await this.storiesModel.findByIdAndDelete(id);
    return result;
  }
}
