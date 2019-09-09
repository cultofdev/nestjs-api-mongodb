import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Address } from './interface/address.interface';
import { CreateAddressDto } from './dto/create-address.dto';

@Injectable()
export class AddressService {

    constructor(
        @InjectModel('Address') private readonly addressModel: Model<Address>,
    ) {}

    async findAll(): Promise<Address[]> {
        return await this.addressModel.find().exec();
    }

    async findOne(param: number): Promise<Address> {
        return await this.addressModel.findOne({ id: param });
    }

    async insertOne(address: Address): Promise<Address> {
        const createdAddress = new this.addressModel(address);
        return await createdAddress.save();
    }

    async deleteOne(id: number): Promise<Address> {
        return await this.addressModel.deleteOne({ id });
    }

    async updateOne(id: number, address: CreateAddressDto): Promise<Address> {
        return await this.addressModel.updateOne({ id }, address);
    }
}
