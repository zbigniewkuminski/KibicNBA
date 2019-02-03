import { Component, OnInit } from '@angular/core';
import { Player, Statistics } from 'src/app/shared/models.shared';
import { Positions, Teams } from 'src/app/shared/enum.shared';
import { MatTableDataSource, MatSort } from '@angular/material';
import { DataSource } from '@angular/cdk/table';
@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
  displayedColumns: string[] = ['name', 'secondName', 'surname','jerseyNumber','age','position','team'];
  private players: Player[] = [{
    name: 'Dirk',
    secondName: '',
    surname: 'Nowitzki',
    age: '99',
    jerseyNumber: '41',
    photo: '',
    position: Positions.PF,
    // stats: Statistics = ,
    team: Teams.DAL
  },
  {
    name: 'LeBron',
    secondName: 'Raymone',
    surname: 'James',
    age: '34',
    jerseyNumber: '46',
    photo: '',
    position: Positions.SFPF,
    // stats: Statistics = ,
    team: Teams.LAL
  }]
  constructor() { }

  ngOnInit() {
  }

}
