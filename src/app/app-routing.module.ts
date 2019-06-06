import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from './components/home/index/index.component';
import { CompletedComponent } from './components/home/completed/completed.component';
import { AddTodoComponent } from './components/home/add-todo/add-todo.component';
import { PageNotFoundComponent } from './components/home/page-not-found/page-not-found.component';

const routes: Routes = [
  {path:"",redirectTo:"home",pathMatch:"full"},
  {path:"home",component:IndexComponent},
  {path:"completed",component:CompletedComponent},
  {path:"add",component:AddTodoComponent},
  {path:"**",component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routeComponent = [
    IndexComponent,
    CompletedComponent,
    AddTodoComponent,
    PageNotFoundComponent
]
