import { Component, OnInit } from '@angular/core';
import { DataProviderService } from '../../../data-provider.service';
import { Todo } from '../../../models/todo';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  todoList : Todo[];
  error : string;
  constructor(private dataProvider : DataProviderService) { }

  ngOnInit() {
    this.dataProvider.getTodo()
    .subscribe( data => this.todoList = data ,
      error => this.error = error);
  }

}
