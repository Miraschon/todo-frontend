import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HelloService} from '../services/hello.service';
import {TodoItem} from '../model/todo.item';


@Component({
  selector: 'app-title-detail',
  templateUrl: './title-detail.component.html',
  styleUrls: ['./title-detail.component.scss']
})
export class TitleDetailComponent implements OnInit {

  id: number;
  title: string;
  item: TodoItem;

  constructor(private helloService: HelloService,private route: ActivatedRoute) { }

  update(id:number, title:string){
    this.helloService.update(id, title);
  }

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.item = this.helloService.getItem(this.id);
    console.log('item=',this.item, this.id);
    this.title = this.item.title;
  }

}
