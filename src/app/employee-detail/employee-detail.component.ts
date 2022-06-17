import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.scss']
})
export class EmployeeDetailComponent implements OnInit {

  employeeData: any;
  employeeId !: number;

  constructor(private api: ApiService, private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(val => {
      this.employeeId = val['id'];
    });
    this.getEmployee();
  }

  getEmployee() {
    this.api.getEmployee(this.employeeId)
      .subscribe(res => {
        console.log(res);
        this.employeeData = res;
      });
  }
}
