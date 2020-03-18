import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IEmployee } from './employee';
import {throwError as observableThrowError,  Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';


// this injectable Decorator is used if EmployeeService have other dependecies like employees compny details
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  public _url: string = "/assets/data/employees.json";

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(this._url)
    .pipe(tap(data => JSON.stringify(data)) , catchError(this.errorHandler)) ;
  }
  errorHandler(error: HttpErrorResponse){
    return observableThrowError(error.message || "Server Error");
  }
}
