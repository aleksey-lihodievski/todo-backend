import { Injectable } from '@nestjs/common';
import { TodosRepository } from './todos.repository';

@Injectable()
export class TodosService {
  constructor(private readonly todosRepository: TodosRepository) {}

  async getTodos() {
    return this.todosRepository.getTodos();
  }

  async createTodo(title: string) {
    return this.todosRepository.createTodo({
      title,
      completed: false,
    });
  }
}
