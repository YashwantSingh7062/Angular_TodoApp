import { Component, OnInit } from '@angular/core';
import { DataProviderService } from '../../data-provider.service';
import { Todo } from '../../models/todo';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  todoList : Todo[];
  error : string;
  constructor(private dataProvider : DataProviderService) { }

  ngOnInit() {
    this.dataProvider.getTodo()
    .subscribe( data => this.todoList = data ,
      error => this.error = error);

      this.todoList = this.todoList.filter(
        (todo) => {
          todo.isCompleted != true
        }
      )
  }

}
