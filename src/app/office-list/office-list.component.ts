import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-office-list',
  templateUrl: './office-list.component.html',
  styleUrls: ['./office-list.component.scss']
})
export class OfficeListComponent implements OnInit {

  dataSource!: MatTableDataSource<any>;
  displayedColumns: string[] = ['name'];


  constructor(private api: ApiService, private route: Router) { }

  ngOnInit(): void {
    this.getDataOffice()
  }

  getDataOffice() {
    this.api.getOffices()
      .subscribe(res => {
          this.dataSource = new MatTableDataSource(res)
      });
  }

  gotoDetails(element: any) {
    this.route.navigate(['employee-detail', element.id]);
  }

}
