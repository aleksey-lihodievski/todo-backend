import { AddTodoDto } from './dto/add-todo.dto';
import { Body, Controller, Get, Post } from '@nestjs/common';

import { TodosService } from './todos.service';

@Controller('todos')
export class TodosController {
  constructor(private readonly todoService: TodosService) {}

  @Get('/')
  async getTodos() {
    return this.todoService.getTodos();
  }

  @Post('/add')
  async createTodo(@Body() addTodoDto: AddTodoDto) {
    const { title } = addTodoDto;
    return this.todoService.createTodo(title);
  }
}
