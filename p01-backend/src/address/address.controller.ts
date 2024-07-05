import { Controller, Get, Post, Patch, Delete, Body, Param } from '@nestjs/common';
import { AddressService } from './address.service';
import { CreateAddressDto } from './address-dto/createaddress';
import { UpdateAddressDto } from './address-dto/updateaddress';

@Controller()
export class AddressController {
  constructor(private readonly addressService: AddressService) {}

	@Post()
  create(@Body() createUserDto: CreateAddressDto) {
    return this.addressService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.addressService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.addressService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateAddressDto) {
    return this.addressService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.addressService.remove(+id);
  }
}
