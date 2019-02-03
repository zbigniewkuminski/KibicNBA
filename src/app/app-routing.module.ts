import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayerProfileComponent } from '../app/main-site/player-profile/player-profile.component'
import { MainSiteComponent } from './main-site/main-site.component';

const routes: Routes = [
  { path: 'zawodnicy', component: PlayerProfileComponent },
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


