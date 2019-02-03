import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayersComponent } from '../app/main-site/players/players.component'
import { MainSiteComponent } from './main-site/main-site.component';

const routes: Routes = [
  { path: 'zawodnicy', component: PlayersComponent },
  { path: 'strona-glowna', component: MainSiteComponent }
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


