import { IsArray, IsNotEmpty, IsString } from 'class-validator';

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
  studentIds: string[];
  
  @IsArray()
  @IsString({ each: true })
  @IsNotEmpty({ each: true })
  bookIds: string[];
}
