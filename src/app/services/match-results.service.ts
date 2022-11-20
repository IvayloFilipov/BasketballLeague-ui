import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MatchResultsInterface } from '../interfaces/match-results';

@Injectable({
  providedIn: 'root'
})
export class MatchResultsService {
  private readonly apiUrl = `${environment.apiUrl}matches`;

  constructor(private http: HttpClient) { }

  getMachResults(): Observable<MatchResultsInterface[]> {
    return this.http.get<MatchResultsInterface[]>(`${this.apiUrl}/get-results`);
  }
}
