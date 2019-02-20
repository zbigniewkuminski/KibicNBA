import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayersComponent } from '../app/main-site/players/players.component'
import { MainSiteComponent } from './main-site/main-site.component';
import { TeamsComponent } from './main-site/teams/teams.component';

const routes: Routes = [
  { path: 'zawodnicy', component: PlayersComponent },
  { path: 'strona-glowna', component: MainSiteComponent },
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


