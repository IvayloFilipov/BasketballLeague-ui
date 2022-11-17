import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TeamInterface } from '../interfaces/team-interface';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {
  private readonly apiUrl = `${environment.apiUrl}teams`;

  constructor(private http: HttpClient) { }

  getAllTeams(): Observable<TeamInterface[]> {
    return this.http.get<TeamInterface[]>(`${this.apiUrl}/get-teams`);
  }
}
