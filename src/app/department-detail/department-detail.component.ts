import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-department-detail',
  template: `
      <h3>Your selected Department id is {{departmentId}}</h3>
  `,
  styles: []
})
export class DepartmentDetailComponent implements OnInit {
  public departmentId;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // get id parameter from the url.
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.departmentId = id;
  }

}
