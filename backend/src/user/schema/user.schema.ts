import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {

  @Prop({ unique: true })
  userName: string;

  @Prop({ required: true })
  password: string;

  @Prop({ unique: true })
  email: string;

  @Prop()
  profileName: string;

}

export const UserSchema = SchemaFactory.createForClass(User);
