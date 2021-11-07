import { Component, OnInit } from '@angular/core';
import { stations } from '../stations';

@Component({
  selector: 'app-station-list',
  templateUrl: './station-list.component.html',
  styleUrls: ['./station-list.component.css']
})
export class StationListComponent implements OnInit {
  stations = stations;
  constructor() { }

  ngOnInit(): void {
  }

}
