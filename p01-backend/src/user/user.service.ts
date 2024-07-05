import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity'
import { CreateUserDto } from './user-dto/createuser';
import { UpdateUserDto } from './user-dto/updateuser';

@Injectable()
export class UserService {
	constructor( @InjectRepository(User) private userRepository: Repository<User>) {}

  create(createUserDto: CreateUserDto): Promise<User> {
    return this.userRepository.save(createUserDto);
  }

  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  findOne(id: number): Promise<User> {
		return this.userRepository.findOneBy({id});
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    await this.userRepository.update(id, updateUserDto);
		return this.findOne(id);
  }

  async remove(id: number) {
    await this.userRepository.delete({id});
  }
}
