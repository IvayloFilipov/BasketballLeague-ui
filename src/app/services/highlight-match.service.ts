import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HighlightMatchInterface } from '../interfaces/highlight-match';

@Injectable({
  providedIn: 'root'
})
export class HighlightMatchService {
  private readonly apiUrl = `${environment.apiUrl}match-results`;

  constructor(private http: HttpClient) { }

  getBestMatch(): Observable<HighlightMatchInterface[]> {
    return this.http.get<HighlightMatchInterface[]>(`${this.apiUrl}/get-highlight-match`)
  }
}
