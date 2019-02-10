import { Component, OnInit } from '@angular/core';
import { Player } from 'src/app/shared/models.shared';

@Component({
  selector: 'app-player-profile',
  templateUrl: './player-profile.component.html',
  styleUrls: ['./player-profile.component.css']
})
export class PlayerProfileComponent implements OnInit {

  public player: Player;
  constructor() { }

  ngOnInit() {
  }

}
