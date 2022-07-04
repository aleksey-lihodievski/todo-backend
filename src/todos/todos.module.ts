import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';

import { TodosController } from './todos.controller';
import { TodosService } from './todos.service';
import { TodosRepository } from './todos.repository';
import { Todo, TodoSchema } from './schemas/todos.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Todo.name, schema: TodoSchema }]),
  ],
  controllers: [TodosController],
  providers: [TodosService, TodosRepository],
})
export class TodosModule {}
