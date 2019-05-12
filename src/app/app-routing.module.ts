import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayersComponent } from '../app/main-site/players/players.component'
import { MainPageComponent } from './main-site/main-page/main-page.component';
import { TeamsPageComponent } from './main-site/teams/teams-page/teams.page.component';

const routes: Routes = [
  { path: 'zawodnicy', component: PlayersComponent },
  { path: 'strona-glowna', component: MainPageComponent },
  { path: 'druzyny', component: TeamsPageComponent},
  { path: '', redirectTo: 'strona-glowna', pathMatch: 'full'}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})

export class AppRoutingModule {

}


