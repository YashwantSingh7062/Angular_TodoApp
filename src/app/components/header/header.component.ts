import { Component, OnInit } from '@angular/core';
import { DataProviderService } from '../../data-provider.service';
import { Todo } from '../../models/todo';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  date = new Date();
  todoList : Todo[];
  totalTodo : number;
  percCompleted : number;
  error : string;
  constructor( private dataProvider : DataProviderService) { }

  ngOnInit() {
    this.dataProvider.getTodo()
    .subscribe( data => {
      let todo : Todo[];
      this.todoList = data
      this.totalTodo = this.todoList.length;
      todo = this.todoList.filter((todo)=> {
        return todo.isCompleted === true
      })
      this.percCompleted = Math.ceil((todo.length/this.totalTodo) * 100) ;
    },
    error => this.error = error);
  }

}
