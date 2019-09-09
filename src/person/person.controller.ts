import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { PersonService } from './person.service';
import { Person } from './interface/person.interface';
import { CreatePersonDto } from './dto/create-person.dto';

@Controller('person')
export class PersonController {

    constructor(
        private readonly personService: PersonService,
    ) {}

    @Get()
    findAll(): Promise<Person[]> {
        return this.personService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') param): Promise<Person> {
        return this.personService.findOne(param);
    }

    @Post()
    insertPerson(@Body() createPersonDto: CreatePersonDto) {
        this.personService.insertPerson(createPersonDto);
    }

    @Delete(':id')
    delete(@Param('id') param): Promise<Person> {
        return this.personService.deletePerson(param);
    }

    @Put(':id')
    update(@Body() updatePersonDto: CreatePersonDto, @Param('id') param): Promise<Person> {
        return this.personService.updatePerson(param, updatePersonDto);
    }
}
