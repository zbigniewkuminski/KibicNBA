import { Component, OnInit, ViewChild } from '@angular/core';
import { Player, Statistics, Team } from 'src/app/shared/models.shared';
import { Positions, TeamAchronim, Division, Conference } from 'src/app/shared/enum.shared';
import { MatTableDataSource, MatSort, MatCheckboxChange, MatPaginator, MatDialog } from '@angular/material';
import { PlayerProfileComponent } from './player-profile/player-profile.component';
@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }
  constDisplayedColumns: string[] = ['name', 'secondName', 'surname', 'jerseyNumber', 'age', 'position', 'team'];
  displayedColumns: string[] = this.constDisplayedColumns;
  displayedColumnsTrueFalse: boolean[] = [true, true, true, true, true, true, true];

  private teams: Team[] = [{
    name: 'Mavericks',
    city: 'Dallas',
    division: Division.SouthWest,
    achronim: TeamAchronim.DAL,
    conference: Conference.Western,
    logo: '../../../../images/team_logo/dal.png'
  },
  {
    name: 'Lakers',
    city: 'Los Angeles',
    division: Division.Pacific,
    achronim: TeamAchronim.LAL,
    conference: Conference.Western,
    logo: '../../../../images/team_logo/lal.png'
  }]

  private players: Player[] = [{
    name: 'Dirk',
    secondName: '',
    surname: 'Nowitzki',
    age: '99',
    jerseyNumber: '41',
    photo: '../../../../images/players/dirk.png',
    position: Positions.PF,
    // stats: Statistics = ,
    team: this.teams[0]
  },
  {
    name: 'LeBron',
    secondName: 'Raymone',
    surname: 'James',
    age: '34',
    jerseyNumber: '6',
    photo: '../../../../images/players/lebron.png',
    position: Positions.SFPF,
    // stats: Statistics = ,
    team: this.teams[1]
  }];
  constructor(public dialog: MatDialog) { }

  dataSource = new MatTableDataSource(this.players);

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  private changeDisplayedColumns(index: number): void {
    this.displayedColumnsTrueFalse[index] = !this.displayedColumnsTrueFalse[index];
    let newDisplayedColumns: string[] = [];
    this.displayedColumnsTrueFalse.forEach((element, index2) => {
      element ? newDisplayedColumns.push(this.constDisplayedColumns[index2]) : null;
    });
    this.displayedColumns = newDisplayedColumns;
  }

  openPlayerProfileModal(row) {
    const dialogRef = this.dialog.open(PlayerProfileComponent)
    dialogRef.componentInstance.player = row;
  }
}
