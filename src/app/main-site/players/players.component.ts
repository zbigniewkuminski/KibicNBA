import { Component, OnInit, ViewChild } from '@angular/core';
import { Player, Statistics } from 'src/app/shared/models.shared';
import { Positions, Teams } from 'src/app/shared/enum.shared';
import { MatTableDataSource, MatSort, MatCheckboxChange, MatPaginator } from '@angular/material';
@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  ngOnInit(){
    this.dataSource.paginator = this.paginator;
  }
  constDisplayedColumns: string[] = ['name', 'secondName', 'surname', 'jerseyNumber', 'age', 'position', 'team'];
  displayedColumns: string[] = this.constDisplayedColumns;
  displayedColumnsTrueFalse: boolean[] = [true, true, true, true, true, true, true];

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

  dataSource = new MatTableDataSource(this.players);

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  private changeDisplayedColumns(index: number): void {
    this.displayedColumnsTrueFalse[index] = !this.displayedColumnsTrueFalse[index];
    let test: string[] = [];
    this.displayedColumnsTrueFalse.forEach((element,index2) => {
      element ? test.push(this.constDisplayedColumns[index2]) : null;
    });
    this.displayedColumns = test;
  }
}
