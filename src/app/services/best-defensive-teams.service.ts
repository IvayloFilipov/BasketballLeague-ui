import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BestDefensiveTeamsInterface } from '../interfaces/best-defensive-teams';

@Injectable({
  providedIn: 'root'
})
export class BestDefensiveTeamsService {
  private readonly apiUrl = `${environment.apiUrl}teams`;
  
  constructor(private http: HttpClient) { }

  getBestDefensiveTeams(): Observable<BestDefensiveTeamsInterface[]>{
    return this.http.get<BestDefensiveTeamsInterface[]>(`${this.apiUrl}/get-top-defensive`);
  }

}
