import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  dataSource!: MatTableDataSource<any>;
  displayedColumns: string[] = ['name', 'salary', 'office'];

  constructor(private api: ApiService, private route: Router) { }

  ngOnInit(): void {
    this.getAllData();
  }

  getAllData(){
    this.api.getEmployees()
    .subscribe(res => {
      this.dataSource = new MatTableDataSource(res)
    });
  }

  gotoDetails(element: any) {
    this.route.navigate(['employee-detail', element.id]);
  }
}
