import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayersComponent } from '../app/main-site/players/players.component'
import { TeamsComponent } from './main-site/teams/teams.component';
import { MainPageComponent } from './main-site/main-page/main-page.component';

const routes: Routes = [
  { path: 'zawodnicy', component: PlayersComponent },
  { path: 'strona-glowna', component: MainPageComponent },
  { path: 'druzyny', component: TeamsComponent}
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


