import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Address } from './address.entity'
import { CreateAddressDto } from './address-dto/createaddress';
import { UpdateAddressDto } from './address-dto/updateaddress';

@Injectable()
export class AddressService {
	constructor( @InjectRepository(Address) private addressRepository: Repository<Address>) {}

  create(createUserDto: CreateAddressDto): Promise<Address> {
    return this.addressRepository.save(createUserDto);
  }

  findAll(): Promise<Address[]> {
    return this.addressRepository.find();
  }

  findOne(id: number): Promise<Address> {
    return this.addressRepository.findOneBy({id});
  }

  async update(id: number, updateUserDto: UpdateAddressDto): Promise<Address> {
    await this.addressRepository.update(id, updateUserDto);
		return this.findOne(id);
  }

  async remove(id: number) {
    await this.addressRepository.delete({id});
  }
}
