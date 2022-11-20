import { Component, OnInit } from '@angular/core';
import { BestDefensiveTeamsInterface } from 'src/app/interfaces/best-defensive-teams';
import { BestDefensiveTeamsService } from 'src/app/services/best-defensive-teams.service';

@Component({
  selector: 'app-best-defensive-teams',
  templateUrl: './best-defensive-teams.component.html',
  styleUrls: ['./best-defensive-teams.component.scss']
})
export class BestDefensiveTeamsComponent implements OnInit {
  bestDefensive: BestDefensiveTeamsInterface[] = [];

  // This is just test data of type BestOffensiveTeamsInterface to render. Get all teams from DB in this way as array of objects.
  // bestDefensiveTeams: BestDefensiveTeamsInterface[] = [
  //   {
  //     id: 1,
  //     name: 'Kaspichan',
  //     minScore: 555
  //   },
  //   {
  //     id: 2,
  //     name: 'Plovdiv',
  //     minScore: 850
  //   },
  //   {
  //     id: 3,
  //     name: 'Varna',
  //     minScore: 900
  //   },
  //   {
  //     id: 4,
  //     name: 'Burgas',
  //     minScore: 950
  //   },
  //   {
  //     id: 5,
  //     name: 'Sofia',
  //     minScore: 1001
  //   },
  // ];

  constructor(private bestDefensiveTeamsService: BestDefensiveTeamsService) { }

  ngOnInit(): void {
    this.bestDefensiveTeamsService.getBestDefensiveTeams().subscribe((bestTeams: BestDefensiveTeamsInterface[]) => {
      this.bestDefensive = bestTeams;
    })
  }

}
