import { Injectable } from '@angular/core';
import { HttpClient , HttpErrorResponse } from '@angular/common/http'; 
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataProviderService {
  private _url = "../assets/todo.json";
  constructor(private http : HttpClient ) { }

  getTodo(){
    return this.http.get<any>(this._url)
    .pipe(catchError(this.errorHandler));
  }

  errorHandler(error : HttpErrorResponse){
    return throwError(error.message || "Server Error!!");
  }
}
