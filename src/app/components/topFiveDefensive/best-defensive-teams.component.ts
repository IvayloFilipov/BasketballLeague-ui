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
  //     name: 'Kaspichan',
  //     defensivePoints: 555
  //   },
  //   {
  //     name: 'Plovdiv',
  //     defensivePoints: 850
  //   },
  //   {
  //     name: 'Varna',
  //     defensivePoints: 900
  //   },
  //   {
  //     name: 'Burgas',
  //     defensivePoints: 950
  //   },
  //   {
  //     name: 'Sofia',
  //     defensivePoints: 1001
  //   },
  // ];

  constructor(private bestDefensiveTeamsService: BestDefensiveTeamsService) { }

  ngOnInit(): void {
    this.bestDefensiveTeamsService.getBestDefensiveTeams().subscribe((bestTeams: BestDefensiveTeamsInterface[]) => {
      this.bestDefensive = bestTeams;
    })
  }

}
