import { Component, OnInit } from '@angular/core';
import { Player } from 'src/app/shared/models.shared';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-player-profile',
  templateUrl: './player-profile.component.html',
  styleUrls: ['./player-profile.component.css']
})
export class PlayerProfileComponent implements OnInit {

  public player: Player;
  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

}
