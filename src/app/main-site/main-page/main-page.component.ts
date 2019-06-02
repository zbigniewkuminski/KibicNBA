import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/shared/models.shared';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor() { }

  test: Article[] = [{
    id:1,
    author: 'admin',
    creationDate: new Date(2019,0o3,0o3),
    title: 'Koszykówka',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet ligula blandit dolor fringilla, in venenatis orci pharetra. Nullam iaculis elit at augue tincidunt, sed facilisis ante consequat. Proin facilisis dui a tempor tempus. Duis eu felis viverra, interdum lacus in, viverra nulla. Ut efficitur et nunc at imperdiet. Fusce non nunc suscipit, tincidunt nisl at, fermentum eros. Vivamus sit amet congue arcu. Sed luctus ultrices quam, in tincidunt diam vehicula a. Phasellus a mi et neque rutrum ultrices mollis at diam. Suspendisse sit amet porta ex. Vestibulum augue elit, placerat in bibendum at, venenatis id dolor. Aenean a scelerisque odio. Sed tincidunt nibh eu porttitor molestie. Morbi vitae risus gravida, semper turpis ut, pulvinar nunc. Praesent et diam aliquam, varius dolor ut, faucibus metus.',
    grade: 0,
    frontImage: ''
  },{
    id:2,
    author: 'nieAdmin',
    creationDate: new Date(2019,0o4,17),
    title: 'Koszykówka jest super',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet ligula blandit dolor fringilla, in venenatis orci pharetra. Nullam iaculis elit at augue tincidunt, sed facilisis ante consequat. Proin facilisis dui a tempor tempus. Duis eu felis viverra, interdum lacus in, viverra nulla. Ut efficitur et nunc at imperdiet. Fusce non nunc suscipit, tincidunt nisl at, fermentum eros. Vivamus sit amet congue arcu. Sed luctus ultrices quam, in tincidunt diam vehicula a. Phasellus a mi et neque rutrum ultrices mollis at diam. Suspendisse sit amet porta ex. Vestibulum augue elit, placerat in bibendum at, venenatis id dolor. Aenean a scelerisque odio. Sed tincidunt nibh eu porttitor molestie. Morbi vitae risus gravida, semper turpis ut, pulvinar nunc. Praesent et diam aliquam, varius dolor ut, faucibus metus.',
    grade: 0,
    frontImage: ''
  },{
    id:3,
    author: 'trol',
    creationDate: new Date(2018,10,17),
    title: 'LeBron',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet ligula blandit dolor fringilla, in venenatis orci pharetra. Nullam iaculis elit at augue tincidunt, sed facilisis ante consequat. Proin facilisis dui a tempor tempus. Duis eu felis viverra, interdum lacus in, viverra nulla. Ut efficitur et nunc at imperdiet. Fusce non nunc suscipit, tincidunt nisl at, fermentum eros. Vivamus sit amet congue arcu. Sed luctus ultrices quam, in tincidunt diam vehicula a. Phasellus a mi et neque rutrum ultrices mollis at diam. Suspendisse sit amet porta ex. Vestibulum augue elit, placerat in bibendum at, venenatis id dolor. Aenean a scelerisque odio. Sed tincidunt nibh eu porttitor molestie. Morbi vitae risus gravida, semper turpis ut, pulvinar nunc. Praesent et diam aliquam, varius dolor ut, faucibus metus.',
    grade: 0,
    frontImage: ''
  }]
  ngOnInit() {
    // return this.http.get('https://localhost:44303/api/Player').subscribe(e => {
    //   this.test = e;
    // })
  }

}
