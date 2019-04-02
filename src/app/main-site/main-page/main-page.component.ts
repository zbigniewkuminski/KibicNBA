import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // return this.http.get('https://localhost:44303/api/Player').subscribe(e => {
    //   this.test = e;
    // })
  }

}
