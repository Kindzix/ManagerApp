import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vacation } from '../interfaces/vacation';

@Injectable({
  providedIn: 'root'
})
export class VacationService {
  private baseUrl = '/api/vacations';

  constructor(private http: HttpClient) { }

  getAllVacations(): Observable<Vacation[]> {
    return this.http.get<Vacation[]>(this.baseUrl);
  }

  getVacationsByEmployeeId(employeeId: number): Observable<Vacation[]> {
    return this.http.get<Vacation[]>(`${this.baseUrl}/employee/${employeeId}`);
  }

  createVacation(vacation: {}): Observable<Vacation> {
    return this.http.post<Vacation>(this.baseUrl, vacation);
  }

  updateVacation(id: number, vacation: Vacation): Observable<Vacation> {
    return this.http.put<Vacation>(`${this.baseUrl}/${id}`, vacation);
  }

  deleteVacation(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
