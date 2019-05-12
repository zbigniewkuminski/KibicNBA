import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Division } from 'src/app/shared/enum.shared';
import { ServiceShared } from 'src/app/shared/service.shared';

@Component({
  selector: 'app-teams-page',
  templateUrl: './teams.page.component.html',
  styleUrls: ['./teams.page.component.css']
})
export class TeamsPageComponent implements OnInit {

  easternDivisions: Array<Division> = [Division.Central, Division.Atlantic, Division.SouthEast];
  westernDivisions: Array<Division> = [Division.Pacific, Division.NorthWest, Division.SouthWest];

  constructor(public serviceShared: ServiceShared){
    
  }
  ngOnInit() {

  }
}
