import { Component, OnInit } from '@angular/core';
import {HelloService} from '../services/hello.service';

@Component({
  selector: 'hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss']
})
export class HelloComponent implements OnInit {

  text: string = 'text';

  constructor(private helloService: HelloService) { }

  getTitle() {
    return "todo list";
  }

  addTodo(): void {
    this.helloService.addTodo(this.text);
  }
  getTodo(): string[] {
    return this.helloService.getTodo();
  }

  ngOnInit(): void {
  }

}
