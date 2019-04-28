import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Division } from 'src/app/shared/enum.shared';

@Component({
  selector: 'app-conference-page',
  templateUrl: './conference-page.component.html',
  styleUrls: ['./conference-page.component.css']
})
export class ConferencePageComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
  conferenceName : string = '';
  divisions: Array<Division> = [];
  selectedDivision: string = '';
  ngOnInit() {
    this.conferenceName = this.route.snapshot.paramMap.get('konferencja').toUpperCase();
    this.setDivisions();
  }

  setDivisions(){
    if(this.conferenceName == 'ZACHODNIA'){
      this.divisions = [Division.NorthWest, Division.Pacific, Division.SouthWest];
    }else {
      this.divisions = [Division.Atlantic, Division.Central, Division.SouthEast];

    }
  }
}
