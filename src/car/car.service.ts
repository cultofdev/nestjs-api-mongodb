import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Car } from './interface/car.interface';
import { CreateCarDto } from './dto/create-car.dto';

@Injectable()
export class CarService {
    constructor(
       @InjectModel('Car') private readonly carModel: Model<Car>,
    ) {}

    async findAll(): Promise<Car[]> {
        return await this.carModel.find().exec();
    }

    async findOne(param: number): Promise<Car> {
        return await this.carModel.findOne({ id: param });
    }

    async insertOne(createCarDto: CreateCarDto): Promise<Car> {
        const createdCar = new this.carModel(createCarDto);
        return await createdCar.save();
    }

    async deleteOne(id: number): Promise<Car> {
        return await this.carModel.deleteOne({ id });
    }

    async updateOne(id: number, car: CreateCarDto): Promise<Car> {
        return await this.carModel.updateOne({ id }, car);
    }
}
