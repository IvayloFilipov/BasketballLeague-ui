import { Component, OnInit } from '@angular/core';
import { BestOffensiveTeamsInterface } from 'src/app/interfaces/best-offensive-teams';
import { BestOffensiveTeamsService } from 'src/app/services/best-offensive-teams.service';

@Component({
  selector: 'app-best-offensive-teams',
  templateUrl: './best-offensive-teams.component.html',
  styleUrls: ['./best-offensive-teams.component.scss']
})
export class BestOffensiveTeamsComponent implements OnInit {
  bestOffensive: BestOffensiveTeamsInterface[] = [];
  
  // This is just test data of type BestOffensiveTeamsInterface to render. Get all teams from DB in this way as array of objects.
  // bestOffensiveTeams: BestOffensiveTeamsInterface[] = [
  //   {
  //     id: 1,
  //     name: 'Kaspichan',
  //     maxScore: 1555
  //   },
  //   {
  //     id: 2,
  //     name: 'Plovdiv',
  //     maxScore: 1350
  //   },
  //   {
  //     id: 3,
  //     name: 'Varna',
  //     maxScore: 1300
  //   },
  //   {
  //     id: 4,
  //     name: 'Burgas',
  //     maxScore: 1250
  //   },
  //   {
  //     id: 5,
  //     name: 'Sofia',
  //     maxScore: 1155
  //   },
  // ];

  constructor(private bestOffensiveTeamsService: BestOffensiveTeamsService) { }

  ngOnInit(): void {
    this.bestOffensiveTeamsService.getBestOffensiveTeams().subscribe((bestTeams: BestOffensiveTeamsInterface[]) => {
      this.bestOffensive = bestTeams;
    })
  }

}
