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
  //     TotalPoints: 1555
  //   },
  //   {
  //     id: 2,
  //     name: 'Plovdiv',
  //     TotalPoints: 1350
  //   },
  //   {
  //     id: 3,
  //     name: 'Varna',
  //     TotalPoints: 1300
  //   },
  //   {
  //     id: 4,
  //     name: 'Burgas',
  //     TotalPoints: 1250
  //   },
  //   {
  //     id: 5,
  //     name: 'Sofia',
  //     TotalPoints: 1155
  //   },
  // ];

  constructor(private bestOffensiveTeamsService: BestOffensiveTeamsService) { }

  ngOnInit(): void {
    this.bestOffensiveTeamsService.getBestOffensiveTeams().subscribe((bestTeams: BestOffensiveTeamsInterface[]) => {
      this.bestOffensive = bestTeams;
    })
  }

}
