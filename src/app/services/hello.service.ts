import {Injectable} from '@angular/core';
import {TodoItem} from '../model/todo.item';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class HelloService {

    todo: TodoItem[] = [];

    public lastId: number = 0;

    del(id: number): Observable<any> {
        return this.http.delete('http://localhost:8080/api/delete/' + id);
    }

    update(item: TodoItem): Observable<TodoItem> {
        return this.http.put<any>('http://localhost:8080/api/update', item);
    }

    addTodo(item: TodoItem): Observable<TodoItem> {
        return this.http.post<any>('http://localhost:8080/api/add', item);
    }

    getTodo(): Observable<TodoItem[]> {
        return this.http.get<TodoItem[]>('http://localhost:8080/api/list');
    }

    getItem(id: number): Observable<TodoItem> {
        return this.http.get<TodoItem>('http://localhost:8080/api/'+id);
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
