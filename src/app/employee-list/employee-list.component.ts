import { Component, OnInit } from "@angular/core";
import { EmployeeService } from "../employee.service";

@Component({
  selector: "app-employee-list",
  template: `
    <h2>Employee List</h2>
    <h3>{{errorMsg}}</h3>
    <ul>
      <li *ngFor="let employee of employees">
        {{ employee.name }} , {{ employee.age }}
      </li>
    </ul>
  `,
  styleUrls: ["./employee-list.component.css"]
})
export class EmployeeListComponent implements OnInit {
  // hard coded array of employees.
  public employees = [];
  public errorMsg;

  constructor(private _employeeService: EmployeeService) {}

  ngOnInit(): void {
    this._employeeService.getEmployees()
    .subscribe(data => this.employees = data,
              error => this.errorMsg = error);
  }
}
