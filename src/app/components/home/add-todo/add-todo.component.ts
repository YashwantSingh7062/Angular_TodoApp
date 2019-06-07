import { Component, OnInit } from '@angular/core';
import { Todo } from '../../../models/todo';
import { DataProviderService } from '../../../data-provider.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  options = ["Business","Routine","Work","Studies","Diet","Travel"];
  todoList : Todo[];
  error : string;
  countTodo : number;
  Todo : Todo = {
    "id" : null ,
    "title" : null,
    "time" : null,
    "relatedTo" : "Your todo is related to",
    "isCompleted" : false
  };
  constructor( private dataProvider : DataProviderService ) { }

  ngOnInit() {
    this.dataProvider.getTodo()
    .subscribe(data => {
                this.todoList = data;
                this.countTodo = this.todoList.length;
                },
                error => this.error = error);
  }
  addTodoToService(){
    this.Todo.id = this.countTodo;
    this.todoList.push(this.Todo);
    this.countTodo++;
  }
}
