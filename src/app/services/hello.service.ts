import { Injectable } from '@angular/core';
import {TodoItem} from '../model/todo.item';

@Injectable({
  providedIn: 'root'
})
export class HelloService {

  private todo: TodoItem[] = [];

  public lastId: number = 0;

  del(id:number) : void {
    this.todo = this.todo.filter(h => h.id !== id);
  }

  addTodo(item:TodoItem) : void {
    this.todo.push(item);
  }

  getTodo(): TodoItem[] {
    return this.todo;
  }


  constructor() { }
}
