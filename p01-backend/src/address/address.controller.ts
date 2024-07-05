import { Controller, Get, Post, Patch, Delete, Body, Param } from '@nestjs/common';
import { AddressService } from './address.service';
import { CreateAddressDto } from './address-dto/createaddress';
import { UpdateAddressDto } from './address-dto/updateaddress';

@Controller('/address')
export class AddressController {
  constructor(private readonly addressService: AddressService) {}

	@Post()
  create(@Body() createAddressDto: CreateAddressDto) {
    return this.addressService.create(createAddressDto);
  }

  @Get()
  findAll() {
    return this.addressService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.addressService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateAddressDto: UpdateAddressDto) {
    return this.addressService.update(id, updateAddressDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.addressService.remove(id);
  }
}
