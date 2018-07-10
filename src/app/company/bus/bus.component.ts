import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Bus } from '../../models/bus.model';
import { CompanyService } from '../company.service';

@Component({
  selector: 'tcc-bus',
  templateUrl: './bus.component.html',
  styleUrls: ['./bus.component.css']
})
export class BusComponent implements OnInit {

  private companyService: CompanyService;

  public companyName: string;

  // public buses: Bus[] = [];
  public buses: Bus[] = [
    {registration: 1111}
  ];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.companyName = this.route.snapshot.paramMap.get('name');

    // Ir no serviço para pergar os buses a partir do companyName
    // this.companyService.buses(
    //   buses => {
    //     this.buses = buses;
    //   }
    // );
  }
}
