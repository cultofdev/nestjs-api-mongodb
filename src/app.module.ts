import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonModule } from './person/person.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CarModule } from './car/car.module';
import { AddressModule } from './address/address.module';
import { StockModule } from './stock/stock.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://192.168.1.17:27017/PersonDB', { useNewUrlParser: true }),
    PersonModule,
    AddressModule,
    CarModule,
    StockModule,
  ],
  controllers: [
    AppController,
  ],
  providers: [
    AppService,
  ],
})
export class AppModule {}
