import { Component, OnInit } from '@angular/core';
import { MatchResultsInterface } from 'src/app/interfaces/match-results';
import { MatchResultsService } from 'src/app/services/match-results.service';

@Component({
  selector: 'app-match-results',
  templateUrl: './match-results.component.html',
  styleUrls: ['./match-results.component.scss'],
})
export class MatchResultsComponent implements OnInit {
  scores: MatchResultsInterface[] = [];

  // This is just test data of type MatchResultsInterface to render. Get all scores from DB in this way as array of objects.
  teamsScore: MatchResultsInterface[] = [
    {
      id: 1,
      homeTeam: 'Sofia',
      awayTeam: 'Plovdiv',
      homeScore: 111,
      awayScore: 125,
    },
    {
      id: 2,
      homeTeam: 'Varna',
      awayTeam: 'Burgas',
      homeScore: 98,
      awayScore: 80,
    },
    {
      id: 3,
      homeTeam: 'Ruse',
      awayTeam: 'Kaspichan',
      homeScore: 100,
      awayScore: 135,
    },
    {
      id: 4,
      homeTeam: 'Sofia',
      awayTeam: 'Kaspichan',
      homeScore: 105,
      awayScore: 120,
    },
  ];

  constructor(private matchResultsService: MatchResultsService) {}

  ngOnInit(): void {
    this.matchResultsService.getMachResults().subscribe((scores: MatchResultsInterface[]) => {
      this.scores = scores;
    })
  }

}
