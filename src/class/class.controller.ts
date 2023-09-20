import { Controller, Post, Body } from '@nestjs/common';
import { ClassRepository } from './class.repository';
import { CreateClassDTO } from './dto/CreateClass.dto';

@Controller('/classes')
export class ClassController {
  constructor(private classRepository: ClassRepository) {}

  @Post()
  async createClass(@Body() classData: CreateClassDTO) {
    this.classRepository.save(classData);

    return {
      class: classData,
      message: 'Class saved successfully',
    };
  }
}
