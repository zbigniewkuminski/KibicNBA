import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css'],
  animations: [
    trigger('westConferenceTile', [
      state('false', style({
        'width':'480px',
        'height':'420px'
      })),
      state('true', style({
        'width':'520px',
        'height':'440px',
        'position':'absolute',
      })),
      transition('false => true', animate(600)),
      transition('true => false', animate(300))
    ]),
    trigger('eastConferenceTile', [
      state('false', style({
        'width':'480px',
        'height':'420px'
      })),
      state('true', style({
        'width':'520px',
        'height':'440px',
        'position':'absolute',
      })),
      transition('false => true', animate(600)),
      transition('true => false', animate(300))
    ])
  ]
})
export class TeamsComponent implements OnInit {
  westHoverTile: string = 'false';
  eastHoverTile: string = 'false';
  constructor() { }

  ngOnInit() {
  }

  private changeState(conference: string, state: string) {
    if (conference == 'west') {
      this.westHoverTile = state;
    } else {
      this.eastHoverTile = state;
    }
  }

}
