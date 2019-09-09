import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AddressSchema } from './schema/address.schema';
import { AddressController } from './address.controller';
import { AddressService } from './address.service';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'Address', schema: AddressSchema }]),
    ],
    exports: [

    ],
    controllers: [
        AddressController,
    ],
    providers: [
        AddressService,
    ],
})
export class AddressModule {}
