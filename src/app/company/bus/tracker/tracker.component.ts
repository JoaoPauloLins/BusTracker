import { Component, OnInit } from '@angular/core';
import { Tracker } from '../../../models/tracker.model';

@Component({
  selector: 'tcc-tracker',
  templateUrl: './tracker.component.html',
  styleUrls: ['./tracker.component.css']
})
export class TrackerComponent implements OnInit {

  public tracker: Tracker =
    {latitude: 51.678418,
    longitude: 7.809007,
    time: '12h30'};

  constructor() { }

  ngOnInit() {
  }

}
