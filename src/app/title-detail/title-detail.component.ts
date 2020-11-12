import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HelloService} from '../services/hello.service';
import {TodoItem} from '../model/todo.item';
import { Router } from '@angular/router';


@Component({
  selector: 'app-title-detail',
  templateUrl: './title-detail.component.html',
  styleUrls: ['./title-detail.component.scss']
})
export class TitleDetailComponent implements OnInit {

  id: number;
  title: string;
  item: TodoItem;

  constructor(private helloService: HelloService,private route: ActivatedRoute, private router: Router) { }

  update(id:number, title:string){
    this.helloService.update(new TodoItem(id, title)).pipe()
        .subscribe(()=>this.router.navigateByUrl('/home'));
  }

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.helloService.getItem(this.id).pipe()
        .subscribe((item)=>{
          this.item=item;
          this.title = this.item.title;
        });
  }
}
