import { Injectable } from "@nestjs/common";
import Class from "./class.entity";
import { CreateClassDTO } from "./dto/CreateClass.dto";

@Injectable()
export class ClassRepository {
  async save(classData: CreateClassDTO) {
    const newClass = new Class(classData);
    await newClass.save();
  }
}