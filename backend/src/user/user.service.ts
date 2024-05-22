import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './schema/user.schema';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}
  async create(createUserDto: CreateUserDto) {
    const salt = await bcrypt.genSalt();
    const password = createUserDto.password;
    const hash = await bcrypt.hash(password, salt);
    createUserDto.password = hash;
    const result = new this.userModel(createUserDto);
    return result.save();
  }

  findAll() {
    return `This action returns all user`;
  }

  async findByUserName(userName: string): Promise<User> {
    const user = await this.userModel.findOne({ userName: userName }).exec();
    if (!user) {
      throw new NotFoundException('User not found.');
    }
    return user
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
