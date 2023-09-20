import { IsEmail, IsIn, IsNotEmpty, IsString, MinLength } from "class-validator";

export class CreateUserDTO {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  @MinLength(6)
  password: string;

  @IsIn(['Aluno', 'Professor'])
  role: string;
}