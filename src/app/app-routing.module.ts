import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HighlightMatchComponent } from './components/highlightMatch/highlight-match.component';
import { MatchResultsComponent } from './components/results/match-results/match-results.component';
import { TeamsComponent } from './components/teams/teams/teams.component';
import { BestDefensiveTeamsComponent } from './components/topFiveDefensive/best-defensive-teams.component';
import { BestOffensiveTeamsComponent } from './components/topFiveOffensive/best-offensive-teams.component';

const routes: Routes = [
  // { path: '', component: HomeComponent },
  // { path: 'home', component: HomeComponent },
  {
    path: 'get-teams',
    component: TeamsComponent,
  },
  {
    path: 'get-results',
    component: MatchResultsComponent,
  },
  {
    path: 'get-top-offensive',
    component: BestOffensiveTeamsComponent,
  },
  {
    path: 'get-top-defensive',
    component: BestDefensiveTeamsComponent,
  },
  {
    path: 'get-highlight-match',
    component: HighlightMatchComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
