import { Component, OnInit } from '@angular/core';
import { TeamInterface } from 'src/app/interfaces/team-interface';
import { TeamsService } from 'src/app/services/teams.service';

@Component({
  selector: 'app-teams-desc',
  templateUrl: './teams-desc.component.html',
  styleUrls: ['./teams-desc.component.scss']
})
export class TeamsDescComponent implements OnInit {
  teams: TeamInterface[] = [];
  
  constructor(private teamsService: TeamsService) { }

  ngOnInit(): void {
    this.teamsService.getAllTeamsDESC().subscribe((teams: TeamInterface[]) => {
      this.teams = teams;
    })
  }

}
