import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeDetailsComponent } from './employe-details/employe-details.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';


const routes: Routes = [
  // pathMatch has two values 'prefix' and 'full', redirectTo will redirect the empty path to "/employees-details" path.
  {path: '', redirectTo:'/employees-details', pathMatch: 'full'},
  {path: 'employees-details', component: EmployeDetailsComponent},
  {path: 'employees-list', component: EmployeeListComponent},
  {path: 'departments/:id', component: DepartmentDetailComponent},
  // always put this route on last because if we put it in mid or first all below routes will not work thats way declare it at bottom,
  // this also affects when there is no path to resolve this we define a path a at ByteLengthQueuingStrategy.
  {path: '**', component: PageNotFoundComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [EmployeDetailsComponent, EmployeeListComponent]
