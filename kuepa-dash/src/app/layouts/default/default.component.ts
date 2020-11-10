import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {

  sideBarOpen = true;

  constructor( private http: HttpClient) {
    this.http.get('https://api.opendota.com/api/proPlayers');
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  sideBArToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

}
