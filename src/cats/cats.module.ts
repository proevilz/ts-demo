import { Module } from '@nestjs/common';
import { TypegooseModule } from '@m8a/nestjs-typegoose';
import { Cat } from './cats.model';

import { CatsService } from './cats.service';

@Module({
  imports: [TypegooseModule.forFeature([Cat])],
  controllers: [],
  providers: [CatsService],
})
export class CatsModule {}
