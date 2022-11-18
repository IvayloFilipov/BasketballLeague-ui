import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BestOffensiveTeamsInterface } from '../interfaces/best-offensive-teams';

@Injectable({
  providedIn: 'root'
})
export class BestOffensiveTeamsService {
  private readonly apiUrl = `${environment.apiUrl}teams`;
  
  constructor(private http: HttpClient) { }

  getBestOffensiveTeams(): Observable<BestOffensiveTeamsInterface[]> {
    return this.http.get<BestOffensiveTeamsInterface[]>(`${this.apiUrl}/get-top-offensive`)
  }
}
