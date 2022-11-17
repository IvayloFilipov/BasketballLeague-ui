import { Component, OnInit } from '@angular/core';
import { TeamInterface } from 'src/app/interfaces/team-interface';
import { TeamsService } from 'src/app/services/teams.service';


@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {
  teams: TeamInterface[] = [];

  // This is just test data of type TeamInterface to render. Get all teams from DB in this way.
  teamsArray: TeamInterface[] = [
    {
      id: 1,
      name: 'Sofia'
    },
    {
      id: 2,
      name: 'Plovdiv'
    },
    {
      id: 3,
      name: 'Varna'
    }
  ];

  constructor(private teamsService: TeamsService) { }

  ngOnInit(): void {
    this.teamsService.getAllTeams().subscribe((teams: TeamInterface[]) => {
      this.teams = teams;
    })
  }

}
