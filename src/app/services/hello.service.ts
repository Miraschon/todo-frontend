import { Injectable } from '@angular/core';
import {TodoItem} from '../model/todo.item';

@Injectable({
  providedIn: 'root'
})
export class HelloService {
   
  static todo: TodoItem[];

  public lastId: number = 0;

  del(id:number) : void {
    HelloService.todo = HelloService.todo.filter(h => h.id !== id);
  }

  update(id:number, title:string): void {
    for (let i=0; i<HelloService.todo.length; ++i) {
      const t = HelloService.todo[i];
      if(t.id == id){
        t.title = title;
      }
    }
  }

  addTodo(item:TodoItem) : void {
    HelloService.todo.push(item);
  }

  getTodo(): TodoItem[] {
    return HelloService.todo;
  }

  getItem(id:number) : TodoItem{
    console.log('getItem', id, HelloService.todo.length);
    for (let i = 0; i < HelloService.todo.length; ++i) {
      const t = HelloService.todo[i];
      console.log('t',t,id);
      if(t.id == id) {
        return t;
      }
    }
    return undefined;
  }

  constructor() {
    if(!HelloService.todo)
      HelloService.todo = [];
  }
}
