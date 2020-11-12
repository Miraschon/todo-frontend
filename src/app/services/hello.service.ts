import { Injectable } from '@angular/core';
import {TodoItem} from '../model/todo.item';
import { HttpClient, HttpParams } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HelloService {

  todo: TodoItem[] = [];

  public lastId: number = 0;

  del(id:number) : void {
    this.todo = this.todo.filter(h => h.id !== id);
    localStorage.setItem('todo',JSON.stringify(this.todo));
  }

  update(id:number, title:string): void {
    for (let i=0; i<this.todo.length; ++i) {
      if(this.todo[i].id == id){
        this.todo[i].title = title;
      }
    }
    localStorage.setItem('todo',JSON.stringify(this.todo));
    console.log('todo', this.todo, title);
  }

  addTodo(item:TodoItem): Observable<TodoItem>{
    this.todo.push(item);
    return this.http.post<any>('http://localhost:8080/api/add', item);
  }

  getTodo(): Observable<TodoItem[]> {
    this.getFromLocalStorage();
    return this.http.get<TodoItem[]>('http://localhost:8080/api/list');
  }

  getItem(id:number) : TodoItem{
    this.getFromLocalStorage();
    console.log('getItem', id, this.todo.length);
    for (let i = 0; i < this.todo.length; ++i) {
      const t = this.todo[i];
      console.log('t',t,id);
      if(t.id == id) {
        return t;
      }
    }
    return undefined;
  }

  constructor(private http: HttpClient) {
  }

  private getFromLocalStorage() {
    const todoStr = localStorage.getItem('todo');
    if (todoStr) {
      this.todo = JSON.parse(todoStr);
    }
  }
}
