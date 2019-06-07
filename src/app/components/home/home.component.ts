import { Component, OnInit } from '@angular/core';
import { DataProviderService } from '../../data-provider.service';
import { Todo } from '../../models/todo';
import { setTNodeAndViewData } from '@angular/core/src/render3/state';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  todoList : Todo[];
  todoCountArray : Todo[];
  error : string;
  count : number ;
  constructor(private dataProvider : DataProviderService) { }

  ngOnInit() {
    this.dataProvider.getTodo()
    .subscribe( data => {
                  this.todoList = data;
                  this.todoList = this.todoList.filter(
                    (todo) => {
                      return todo.isCompleted === true
                    }
                  );
                  this.count = this.todoList.length;
                } ,
      error => this.error = error);
  }
}
