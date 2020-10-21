import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelloService {

  private todo: string[] = [];


  addTodo(text:string){
    this.todo.push(text);
  }
  getTodo(){
    return this.todo;
  }


  constructor() { }
}
