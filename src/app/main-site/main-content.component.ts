import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // return this.http.get('https://localhost:44303/api/Player').subscribe(e => {
    //   console.log(e)
    // })
  }

}
