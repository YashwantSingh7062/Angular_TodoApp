import { Component, OnInit } from '@angular/core';
import { DataProviderService } from '../../../data-provider.service';
import { Todo } from '../../../models/todo';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.css']
})
export class CompletedComponent implements OnInit {
  todoList : Todo[];
  error : string;
  constructor(private dataProvider : DataProviderService) { }

  ngOnInit() {
    this.dataProvider.getTodo()
    .subscribe( data => this.todoList = data ,
      error => this.error = error);
  }

}
