import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { CarService } from './car.service';
import { Car } from './interface/car.interface';
import { CreateCarDto } from './dto/create-car.dto';

@Controller('car')
export class CarController {

    constructor(
        private readonly carService: CarService,
    ) {}

    @Get()
    findAll(): Promise<Car[]> {
        return this.carService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') param): Promise<Car> {
        return this.carService.findOne(param);
    }

    @Post()
    insertOne(@Body() createCarDto: CreateCarDto) {
        this.carService.insertOne(createCarDto);
    }

    @Delete(':id')
    deleteOne(@Param('id') param): Promise<Car> {
        return this.carService.deleteOne(param);
    }

    @Put(':id')
    updateOne(@Body() updateCarDto: CreateCarDto, @Param('id') param): Promise<Car> {
        return this.carService.updateOne(param, updateCarDto);
    }
}
