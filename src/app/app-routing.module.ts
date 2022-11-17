import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamsComponent } from './components/teams/teams/teams.component';

const routes: Routes = [
  // { path: '', component: HomeComponent },
  // { path: 'home', component: HomeComponent },
  {
    path: 'get-teams',
    component: TeamsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
