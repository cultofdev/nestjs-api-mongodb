import { Module } from '@nestjs/common';
import { PersonController } from './person.controller';
import { PersonService } from './person.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PersonSchema } from './schema/person.schema';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'Person', schema: PersonSchema }]),
    ],
    exports: [
    ],
    controllers: [
        PersonController,
    ],
    providers: [
        PersonService,
    ],
})
export class PersonModule {}
