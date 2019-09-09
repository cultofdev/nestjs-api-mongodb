import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Person } from './interface/person.interface';
import { CreatePersonDto } from './dto/create-person.dto';

@Injectable()
export class PersonService {

    constructor(
        @InjectModel('Person') private readonly personModel: Model<Person>,
    ) {}

    async findAll(): Promise<Person[]> {
        return await this.personModel.find().exec();
    }

    async findOne(param: string): Promise<Person> {
        return await this.personModel.findOne({ first_name: param });
    }

    async insertPerson(person: Person): Promise<Person> {
        const newPerson = new this.personModel(person);
        return await newPerson.save();
    }

    async deletePerson(id: string): Promise<Person> {
        return await this.personModel.deleteOne({id});
    }

    async updatePerson(id: string, person: CreatePersonDto): Promise<Person> {
        return await this.personModel.updateOne({id}, person);
    }
}
