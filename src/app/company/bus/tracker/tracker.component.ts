import { Component, OnInit, Input } from '@angular/core';
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

  public latitude: number;
  public longitude: number;
  public time: string;
  public companyName: string;
  public busRegistration: string;
  // public tracker: Tracker =
  //   {latitude: 51.678418,
  //   longitude: 7.809007,
  //   time: '12h30'};

  constructor(private companyService: CompanyService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.companyName = this.route.snapshot['_routerState'].url.split('/', 3)[2]
    this.busRegistration = this.route.snapshot.paramMap.get('registration');
    const params = this.companyName + ':' + this.busRegistration;
    this.companyService.tracker(params);
    this.initIoConnection();
  }

  private initIoConnection(): void {
    this.companyService.initSocket();

    this.ioConnection = this.companyService.onMessage()
      .subscribe((tracker: any) => {
        console.log(tracker);
        
        this.latitude = +tracker.latitude;
        this.time = tracker.time;
        this.longitude = +tracker.longitude;
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
