import {Component, OnInit} from '@angular/core';
import {HelloService} from '../services/hello.service';
import {TodoItem} from '../model/todo.item';

@Component({
    selector: 'hello',
    templateUrl: './hello.component.html',
    styleUrls: ['./hello.component.scss']
})
export class HelloComponent implements OnInit {

    title: string = 'text';
    todos: TodoItem[] = [];

    constructor(private helloService: HelloService) {
    }

    getTitle() {
        return 'Todo List';
    }

    addTodo(): void {
        this.helloService.addTodo(new TodoItem(null, this.title))
            .pipe()
            .subscribe((newItem) => {
                this.getTodo();
            });
    }

    getTodo(): void {
        this.helloService.getTodo()
            .pipe()
            .subscribe(todos => {
                this.todos = todos;
            }, error => {

            });
    }

    del(id: number) {
        this.helloService.del(id);
        console.log('HelloComponent.del() аргумент id=' + id);
    }


    ngOnInit(): void {
        this.getTodo();
    }

}
