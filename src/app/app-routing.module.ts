import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatchResultsComponent } from './components/results/match-results/match-results.component';
import { TeamsComponent } from './components/teams/teams/teams.component';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
