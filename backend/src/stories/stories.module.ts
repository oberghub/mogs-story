import { Module } from '@nestjs/common';
import { StoriesService } from './stories.service';
import { StoriesController } from './stories.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Stories, StoriesSchema } from './schema/stories.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Stories.name,
        schema: StoriesSchema,
      },
    ]),
  ],
  controllers: [StoriesController],
  providers: [StoriesService],
})
export class StoriesModule {}
