import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { TypegooseModule } from '@m8a/nestjs-typegoose';
@Module({
  imports: [
    TypegooseModule.forRoot('mongodb://localhost:27017/nest'),
    CatsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
