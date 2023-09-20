import { Injectable } from '@nestjs/common';
import {
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
  registerDecorator,
} from 'class-validator';
import { UserRepository } from '../../user/user.repository';

@Injectable()
@ValidatorConstraint({async: true})
export class UserExistsValidator implements ValidatorConstraintInterface {
  constructor(private userRepository: UserRepository){}

  async validate(value: any): Promise<boolean> {
    const user = await this.userRepository.findById(value);

    return !!user;
  }
}

export const UserExists = (validationOptions: ValidationOptions) => {
  return(object: Object, property: string) => {
    registerDecorator({
      target: object.constructor,
      propertyName: property,
      options: validationOptions,
      constraints: [],
      validator: UserExistsValidator,
    })
  }
}