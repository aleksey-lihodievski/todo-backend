import { TodosModule } from './todos/todos.module';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';

// `mongodb+srv://Aleksey:${process.env.MONGODB_PASSWORD}@sandboxcluster.lqv6t.mongodb.net/?retryWrites=true&w=majority`,
@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot('mongodb://localhost:27017/todos-app'),
    TodosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
