import { Component, OnInit } from '@angular/core';
import {HelloService} from '../services/hello.service';
import {TodoItem} from '../model/todo.item';

@Component({
  selector: 'hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss']
})
export class HelloComponent implements OnInit {

  title: string = 'text';

  constructor(private helloService: HelloService) { }

  getTitle() {
    return "todo list";
  }

  addTodo(): void {
    this.helloService.lastId++;
    this.helloService.addTodo(new TodoItem(this.helloService.lastId, this.title));
  }

  getTodo():  TodoItem[] {
    return this.helloService.getTodo();
  }

  del(id:number) {
    this.helloService.del(id);
    console.log('HelloComponent.del() аргумент id='+id)
  }


  ngOnInit(): void {
  }

}
