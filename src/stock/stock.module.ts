import { Module } from '@nestjs/common';
import { StockController } from './stock.controller';
import { StockService } from './stock.service';
import { MongooseModule } from '@nestjs/mongoose';
import { StockSchema } from './schema/stock.schema';

@Module({
    imports: [
        MongooseModule.forFeature([{
            name: 'Stock',
            schema: StockSchema,
        }]),
    ],
    exports: [

    ],
    controllers: [
        StockController,
    ],
    providers: [
        StockService,
    ],
})
export class StockModule {}
