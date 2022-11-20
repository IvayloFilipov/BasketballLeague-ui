import { Component, OnInit } from '@angular/core';
import { HighlightMatchInterface } from 'src/app/interfaces/highlight-match';
import { HighlightMatchService } from 'src/app/services/highlight-match.service';

@Component({
  selector: 'app-highlight-match',
  templateUrl: './highlight-match.component.html',
  styleUrls: ['./highlight-match.component.scss']
})
export class HighlightMatchComponent implements OnInit {
  highlightMatch: HighlightMatchInterface[] = [];

  // This is just test data of type HighlightMatchInterface to render. Get all scores from DB in this way as array of ONE object.
  // teamsScore: HighlightMatchInterface[] = [
  //   {
  //     id: 1,
  //     homeTeam: 'Sofia',
  //     awayTeam: 'Plovdiv',
  //     homeScore: 125,
  //     awayScore: 100,
  //     totalScores: 225,
  //   }
  // ]

  constructor(private highlightMatchService: HighlightMatchService) { }

  ngOnInit(): void {
    this.highlightMatchService.getBestMatch().subscribe((highlightMatch: HighlightMatchInterface[]) => {
      this.highlightMatch = highlightMatch;
    })
  }

}
