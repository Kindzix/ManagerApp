import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Employee } from '../interfaces/employee'; // Popraw import

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private readonly employeeUrl = '/api/employees';
  private readonly employeeAddUrl = '/api/employees/add';
  private employeeData: Employee[] = [];
  private employees$ = new BehaviorSubject<Employee[]>([]);

  constructor(private http: HttpClient) {}

  get employees(): Observable<Employee[]> {
    if (this.employeeData.length === 0) {
      this.fetchEmployees();
    }
    return this.employees$.asObservable();
  }

  fetchEmployees() {
    return this.http.get<Employee[]>(this.employeeUrl).subscribe((data) => {
      this.employeeData = data;
      this.employees$.next(data);
    });
  }

  getEmployeeById(id: Employee | null): Observable<Employee> {
    return this.http.get<Employee>(`${this.employeeUrl}/${id}`);
  }
}
