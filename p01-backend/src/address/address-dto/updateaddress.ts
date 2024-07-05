import { PartialType } from "@nestjs/mapped-types"
import { CreateAddressDto } from "./createaddress"
export class UpdateAddressDto extends PartialType(CreateAddressDto) {}
