import { Injectable } from '@nestjs/common';
import User from './user.entity';
import { CreateUserDTO } from './dto/CreateUser.dto';

@Injectable()
export class UserRepository {
  async save(userData: CreateUserDTO) {
    const newUser = new User(userData);
    await newUser.save();
  }

  async findByEmail(email: string) {
    return await User.findOne({ email }).exec();
  }

  async findById(userId: string) {
    return await User.findById(userId).exec();
  }
}
