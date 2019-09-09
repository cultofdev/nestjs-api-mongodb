import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { StockService } from './stock.service';
import { Stock } from './interface/stock.interface';
import { CreateStockDto } from './dto/create-stock.dto';

@Controller('stock')
export class StockController {

    constructor(
        private readonly stockService: StockService,
    ) {}

    @Get()
    findAll(): Promise<Stock[]> {
        return this.stockService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') param): Promise<Stock> {
        return this.stockService.findOne(param);
    }

    @Post()
    insertOne(@Body() createStockDto: CreateStockDto) {
        this.stockService.insertOne(createStockDto);
    }

    @Delete(':id')
    deleteOne(@Param('id') param): Promise<Stock> {
        return this.stockService.deleteOne(param);
    }

    @Put(':id')
    updateOne(@Body() updateStockDto: CreateStockDto, @Param('id') param): Promise<Stock> {
        return this.stockService.updateOne(param, updateStockDto);
    }
}
