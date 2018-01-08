import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  search: string;

  data = [];

  constructor() {
    for (let i = 0; i < 20; i++) {
      this.data.push(i);
    }
  }

  ngOnInit() {
  }

}
