import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatchResultsComponent } from './components/results/match-results/match-results.component';
import { TeamsComponent } from './components/teams/teams/teams.component';
import { HttpClientModule } from '@angular/common/http';
import { BestOffensiveTeamsComponent } from './components/topFiveOffensive/best-offensive-teams.component';
import { BestDefensiveTeamsComponent } from './components/topFiveDefensive/best-defensive-teams.component';
import { HighlightMatchComponent } from './components/highlightMatch/highlight-match.component';
import { TeamsASCComponent } from './components/teams-asc/teams-asc.component';
import { TeamsDescComponent } from './components/teams-desc/teams-desc.component';

@NgModule({
  declarations: [
    AppComponent,
    MatchResultsComponent,
    TeamsComponent,
    BestOffensiveTeamsComponent,
    BestDefensiveTeamsComponent,
    HighlightMatchComponent,
    TeamsASCComponent,
    TeamsDescComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
