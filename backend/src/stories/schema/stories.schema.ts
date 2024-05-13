import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import content from '../dto/contentmodel';

export type StoriesDocument = Stories & Document;

@Schema()
export class Stories {

  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop()
  author: string;

  @Prop({ required: true })
  byUserId: string;

  @Prop()
  publishDate: string;

  @Prop()
  content: content[];

  @Prop()
  categories: string[];
}

export const StoriesSchema = SchemaFactory.createForClass(Stories);
