import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: "app-department-list",
  template: `
    <ul>
      <li *ngFor="let department of depatments">
        {{ department.id }}
        <button (click) = "onSelect(department)">{{ department.name }}</button>
      </li>
    </ul>
  `,
  styles: []
})
export class DepartmentListComponent implements OnInit {
  public depatments = [
    { "id": 1, "name": "Angular" },
    { "id": 2, "name": "NodeJS" },
    { "id": 3, "name": "Bootstrap" },
    { "id": 4, "name": "MongoDB" },
    { "id": 5, "name": "Express" }
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {}
  onSelect(department) {
    // all the info passed is array that need to construct the array, it follows the path: 'departments/:id'
    this.router.navigate(['/departments', department.id])
  }
}
