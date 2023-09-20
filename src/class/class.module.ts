import { Module } from '@nestjs/common';
import { ClassController } from './class.controller';
import { ClassRepository } from './class.repository';

@Module({
  controllers: [ClassController],
  providers: [ClassRepository],
})
export class ClassModule {}
