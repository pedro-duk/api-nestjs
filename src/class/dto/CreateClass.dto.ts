import { IsArray, IsNotEmpty, IsString } from 'class-validator';
import { BookExists } from '../validation/book-exists.validator';
import { UserExists } from '../validation/student-exists.validator';

export class CreateClassDTO {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  grade: string;

  @IsArray()
  @IsString({ each: true })
  @IsNotEmpty({ each: true })
  @BookExists({ each: true })
  studentIds: string[];

  @IsArray()
  @IsString({ each: true })
  @IsNotEmpty({ each: true })
  @UserExists({ each: true })
  bookIds: string[];
}
