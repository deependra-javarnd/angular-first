import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: "app-employe-details",
  template: `
  <h2>Employe Details</h2>
  <h3>{{errorMsg}}</h3>
    <ul>
      <li *ngFor="let employee of employees">
        {{ employee.id }} {{ employee.name }} {{ employee.age }}
      </li>
    </ul>
  `,
  styleUrls: ["./employe-details.component.css"]
})
export class EmployeDetailsComponent implements OnInit {
  public employees = [];
  public errorMsg;

  constructor(private _employeeService: EmployeeService) {}

  ngOnInit(): void {
    this._employeeService.getEmployees()
    .subscribe(data => this.employees = data,
              error => this.errorMsg = error);
  }
}
