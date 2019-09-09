import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Stock } from './interface/stock.interface';
import { CreateStockDto } from './dto/create-stock.dto';

@Injectable()
export class StockService {

    constructor(
        @InjectModel('Stock') private readonly stockModel: Model<Stock>,
    ) {}

    async findAll(): Promise<Stock[]> {
        return await this.stockModel.find().exec();
    }

    async findOne(param: number): Promise<Stock> {
        return await this.stockModel.findOne({ id: param });
    }

    async insertOne(stock: Stock): Promise<Stock> {
        const newStock = new this.stockModel(stock);
        return await newStock.save();
    }

    async deleteOne(id: number): Promise<Stock> {
        return await this.stockModel.deleteOne({ id });
    }

    async updateOne(id: number, stock: CreateStockDto): Promise<Stock> {
        return await this.stockModel.updateOne({ id }, stock);
    }
}
