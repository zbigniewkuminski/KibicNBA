import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatRadioModule } from '@angular/material/radio';
import { MenuComponent } from './menu/menu.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MainContentComponent } from './main-site/main-content.component';
import { PlayerProfileComponent } from './main-site/players/player-profile/player-profile.component';
import { AppRoutingModule } from './app-routing.module';
import { PlayersComponent } from './main-site/players/players.component';
import { MatTableModule, MatPaginatorModule ,  } from '@angular/material';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTabsModule } from '@angular/material/tabs';
import {MatDialogModule} from '@angular/material/dialog';
import { TeamsComponent } from './main-site/teams/teams.component';
import { MainPageComponent } from './main-site/main-page/main-page.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MainContentComponent,
    PlayerProfileComponent,
    PlayersComponent,
    TeamsComponent,
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatRadioModule,
    MatMenuModule,
    MatButtonModule,
    AppRoutingModule,
    MatTableModule,
    MatCheckboxModule,
    MatTabsModule,
    MatPaginatorModule,
    MatDialogModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[PlayerProfileComponent]
})
export class AppModule { }
