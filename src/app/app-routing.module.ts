import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeAddComponent } from './employee-add/employee-add.component';
import { OfficeListComponent } from './office-list/office-list.component';

const routes: Routes = [
  {path: '', redirectTo: 'employee-list', pathMatch: 'full'},
  {path: 'employee-list', component: EmployeeListComponent},
  {path: 'employee-detail/:id', component: EmployeeDetailComponent},
  {path: 'employee-add', component: EmployeeAddComponent},
  {path: 'office-list', component: OfficeListComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
