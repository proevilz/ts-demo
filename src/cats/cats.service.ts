import { Injectable } from '@nestjs/common';
import { InjectModel } from '@m8a/nestjs-typegoose';
import { Cat } from './cats.model';
import { ReturnModelType } from '@typegoose/typegoose';

@Injectable()
export class CatsService {
  constructor(
    @InjectModel(Cat) private readonly catModel: ReturnModelType<typeof Cat>,
  ) {}

  async create(): Promise<Cat> {
    const createdCat = new this.catModel({
      test: 123, // this should throw a TS error, in that 'test' doesn't exist on type of Cat
      name: 123, // this should also throw a type error, since name is defined as a string in the model
    });
    return await createdCat.save();
  }
}
