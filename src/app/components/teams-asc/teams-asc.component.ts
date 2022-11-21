import { Component, OnInit } from '@angular/core';
import { TeamInterface } from 'src/app/interfaces/team-interface';
import { TeamsService } from 'src/app/services/teams.service';

@Component({
  selector: 'app-teams-asc',
  templateUrl: './teams-asc.component.html',
  styleUrls: ['./teams-asc.component.scss']
})
export class TeamsASCComponent implements OnInit {
  teams: TeamInterface[] = [];

  constructor(private teamsService: TeamsService) { }

  ngOnInit(): void {
    this.teamsService.getAllTeamsASC().subscribe((teams: TeamInterface[]) => {
      this.teams = teams;
    })
  }
}
