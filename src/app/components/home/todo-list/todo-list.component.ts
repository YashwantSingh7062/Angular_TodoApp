import { Component, OnInit ,Input} from '@angular/core';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  @Input() todo : Todo;
  iconClass:string = "";
  constructor( ) { }

  ngOnInit() {
    if(this.todo.relatedTo == "Business"){
      this.iconClass = "fas fa-briefcase";
    }
    else if(this.todo.relatedTo == "Work"){
      this.iconClass = "fas fa-hard-hat";
    }
    else if(this.todo.relatedTo == "Routine"){
      this.iconClass = "fas fa-hot-tub";
    }
    else if(this.todo.relatedTo == "Studies"){
      this.iconClass = "fas fa-book";
    }
    else if(this.todo.relatedTo == "Diet"){
      this.iconClass = "fas fa-utensils";
    }
    else if(this.todo.relatedTo == "Travel"){
      this.iconClass = "fas fa-car-side";
    }
    else{
      this.iconClass = "fas fa-clipboard-list";
    }
  }

  deleteTodo(){
    console.log("Delete Action");
  }
}
