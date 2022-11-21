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
  //     name: 'Kaspichan',
  //     totalPoints: 1555
  //   },
  //   {
  //     name: 'Plovdiv',
  //     totalPoints: 1350
  //   },
  //   {
  //     name: 'Varna',
  //     totalPoints: 1300
  //   },
  //   {
  //     name: 'Burgas',
  //     totalPoints: 1250
  //   },
  //   {
  //     name: 'Sofia',
  //     totalPoints: 1155
  //   },
  // ];

  constructor(private bestOffensiveTeamsService: BestOffensiveTeamsService) { }

  ngOnInit(): void {
    this.bestOffensiveTeamsService.getBestOffensiveTeams().subscribe((bestTeams: BestOffensiveTeamsInterface[]) => {
      this.bestOffensive = bestTeams;
    })
  }

}
