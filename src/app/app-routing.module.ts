import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayersComponent } from '../app/main-site/players/players.component'
import { MainPageComponent } from './main-site/main-page/main-page.component';
import { ConferenceComponent } from './main-site/teams/conferences-main-page/conference.component';
import { ConferencePageComponent } from './main-site/teams/conference-page/conference-page.component';

const routes: Routes = [
  { path: 'zawodnicy', component: PlayersComponent },
  { path: 'strona-glowna', component: MainPageComponent },
  { path: 'konferencje', component: ConferenceComponent},
  { path: 'konferencje/:konferencja', component: ConferencePageComponent}
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


