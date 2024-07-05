import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity'
import { CreateUserDto } from './user-dto/createuser';
import { UpdateUserDto } from './user-dto/updateuser';

@Injectable()
export class UserService {
	constructor( @InjectRepository(User) private userRepository: Repository<User>) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    return await this.userRepository.save(createUserDto);
  }

  async findAll(): Promise<User[]> {
    return await this.userRepository.find(
			{
				relations : ['address'],
			}
		);
  }

  async findOne(id: number): Promise<User> {
		return await this.userRepository.findOne(
			{
				where: {id: id},
				relations : ['address'],
			}
		);
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    await this.userRepository.update(id, updateUserDto);
		return await this.findOne(id);
  }

  async remove(id: number) {
    await this.userRepository.delete({id});
  }
}
