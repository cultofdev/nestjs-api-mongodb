import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { AddressService } from './address.service';
import { Address } from './interface/address.interface';
import { CreateAddressDto } from './dto/create-address.dto';

@Controller('address')
export class AddressController {

    constructor(
        private readonly addressService: AddressService,
    ) {}

    @Get()
    findAll(): Promise<Address[]> {
        return this.addressService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') param): Promise<Address> {
        return this.addressService.findOne(param);
    }

    @Post()
    insertOne(@Body() createAddressDto: CreateAddressDto) {
        this.addressService.insertOne(createAddressDto);
    }

    @Delete(':id')
    delete(@Param('id') param): Promise<Address> {
        return this.addressService.deleteOne(param);
    }

    @Put(':id')
    updateOne(@Body() updateAddressDto: CreateAddressDto, @Param('id') param): Promise<Address> {
        return this.addressService.updateOne(param, updateAddressDto);
    }
}
