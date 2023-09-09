// trailer.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Trailer } from '../interfaces/trailer';

@Injectable({
  providedIn: 'root'
})
export class TrailerService {
  private baseUrl = '/api/trailers';

  constructor(private http: HttpClient) { }

  getAllTrailers(): Observable<Trailer[]> {
    return this.http.get<Trailer[]>(this.baseUrl);
  }

  getTrailerById(id: string | null): Observable<Trailer> {
    return this.http.get<Trailer>(`${this.baseUrl}/${id}`);
  }

  getTrailersByEmployeeId(employeeId: number): Observable<Trailer[]> {
    return this.http.get<Trailer[]>(`${this.baseUrl}/employee/${employeeId}`);
  }

  // Dodaj funkcję do pobierania przyczepy z bazy danych na podstawie numeru rejestracyjnego
  getTrailerByRegistrationNumber(registrationNumber: string): Observable<Trailer> {
    return this.http.get<Trailer>(`${this.baseUrl}/registration/${registrationNumber}`);
  }

  createTrailer(trailer: Trailer): Observable<Trailer> {
    return this.http.post<Trailer>(this.baseUrl, trailer);
  }

  updateTrailer(id: number, trailer: Trailer): Observable<Trailer> {
    return this.http.put<Trailer>(`${this.baseUrl}/${id}`, trailer);
  }

  deleteTrailer(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
