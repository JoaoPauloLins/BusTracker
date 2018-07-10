import { Component, OnInit } from '@angular/core';
import { Tracker } from '../../../models/tracker.model';
import { CompanyService } from '../../company.service';
import { Event } from '../../../models/event';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'tcc-tracker',
  templateUrl: './tracker.component.html',
  styleUrls: ['./tracker.component.css']
})
export class TrackerComponent implements OnInit {

  ioConnection: any;

  public tracker: Tracker;
  public companyName: string;
  public busRegistration: string;
  // public tracker: Tracker =
  //   {latitude: 51.678418,
  //   longitude: 7.809007,
  //   time: '12h30'};

  constructor(private companyService: CompanyService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.companyName = this.route.snapshot.paramMap.get('name');
    this.busRegistration = this.route.snapshot.paramMap.get('registration');
    console.log(this.companyName)
    console.log(this.busRegistration)

    this.initIoConnection();
    this.companyService.send({
      companyName: this.companyName,
      busRegistration: +this.busRegistration
    });
  }

  private initIoConnection(): void {
    this.companyService.initSocket();

    this.ioConnection = this.companyService.onMessage()
      .subscribe((tracker: Tracker) => {
        this.tracker = tracker;
      });


    this.companyService.onEvent(Event.CONNECT)
      .subscribe(() => {
        console.log('connected');
      });

    this.companyService.onEvent(Event.DISCONNECT)
      .subscribe(() => {
        console.log('disconnected');
      });
  }

}
