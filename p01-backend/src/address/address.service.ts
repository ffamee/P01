import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Address } from './address.entity'
import { User } from '../user/user.entity'
import { CreateAddressDto } from './address-dto/createaddress';
import { UpdateAddressDto } from './address-dto/updateaddress';

@Injectable()
export class AddressService {
	constructor( @InjectRepository(Address) private addressRepository: Repository<Address>,
								@InjectRepository(User) private userRepository: Repository<User>) {}

  async create(createAddressDto: CreateAddressDto) {
		const user = await this.userRepository.findOne({where : {id: createAddressDto.user}});
    return await this.addressRepository.save({
			id: createAddressDto.id,
			address: createAddressDto.address,
			sub_district: createAddressDto.sub_district,
			district: createAddressDto.district,
			province: createAddressDto.province,
			post_code: createAddressDto.post_code,
			user: user
		});
  }

  async findAll() {
    return await this.addressRepository.find(
			{
				relations : ['user'],
			}
		);
  }

  async findOne(id: number) {
    return await this.addressRepository.findOne(
			{
				where: {id},
				relations : ['user'],
			}
		);
  }

  async update(id: number, updateAddressDto: UpdateAddressDto) {
		const user = await this.userRepository.findOne({where : {id: updateAddressDto.user}});
		// check user undefined
    await this.addressRepository.update(id, {...updateAddressDto, user: user});
		return await this.findOne(id);
  }

  async remove(id: number) {
    await this.addressRepository.delete({id});
  }
}
