import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Todo, TodoDocument } from './schemas/todos.schema';

Injectable();
export class TodosRepository {
  constructor(@InjectModel(Todo.name) private todoModel: Model<TodoDocument>) {}

  async getTodos(): Promise<Todo[]> {
    return this.todoModel.find();
  }

  async createTodo(todo: Todo): Promise<Todo> {
    const newTodo = new this.todoModel(todo);
    return newTodo.save();
  }
}
