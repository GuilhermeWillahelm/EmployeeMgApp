import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly apiUrl = 'https://localhost:7163/api/';

  constructor(private http: HttpClient) { }

  //Employees
  getEmployees() {
    return this.http.get<any>(this.apiUrl + 'Employees');
  }

  getEmployee(employeeId: number) {
    return this.http.get<any>(this.apiUrl + `Employees/${employeeId}`);
  }

  createEmployee(data: any) {
    return this.http.post(this.apiUrl + 'Employees', data);
  }

  updateEmployee(id: number, data: any) {
    return this.http.put(this.apiUrl + `Employees/${id}`, data);
  }

  deleteEmployee(id: number) {
    return this.http.delete(this.apiUrl + `Employees/${id}`);
  }

  //Offices
  getOffices() {
    return this.http.get<any>(this.apiUrl + 'Offices');
  }

  createOffice(data: any) {
    return this.http.post(this.apiUrl + 'Offices', data);
  }
  
  updateOffice(id: number, data: any) {
    return this.http.put(this.apiUrl + `Offices/${id}`, data);
  }

  deleteOffice(id: number) {
    return this.http.delete(this.apiUrl + `Offices/${id}`);
  }

  //Users
  registerUser(data: any) {
    return this.http.post(this.apiUrl + 'Users', data);
  }

  loginUser(data: any) {
    return this.http.post(this.apiUrl + 'Users/LoginUser', data);
  }

}
