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

  public companyName: string;

  public buses: Bus[] = [];
  public buses1: Bus[] = [
    {registration: 1111},
    {registration: 7538}
  ];
  public buses2: Bus[] = [
    {registration: 7607},
    {registration: 8387}
  ];
  public buses3: Bus[] = [
    {registration: 4818},
    {registration: 4004},
    {registration: 13},
    {registration: 3824},
    {registration: 9973},
    {registration: 4604},
    {registration: 3439},
    {registration: 5474}
  ];
  public buses9: Bus[] = [
    {registration: 4320},
    {registration: 199},
    {registration: 6046}
  ];

  constructor(private companyService: CompanyService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.companyName = this.route.snapshot.paramMap.get('name');

    if (this.companyName === 'E1') {
      this.buses = this.buses1;
    } else if (this.companyName === 'E2') {
      this.buses = this.buses2;
    } else if (this.companyName === 'E3') {
      this.buses = this.buses3;
    } else {
      this.buses = this.buses9;
    }

    // this.companyService.buses(this.companyName).subscribe(
    //   data => { this.buses = data},
    //   err => console.error(err),
    //   () => console.log('done loading buses')
    // );
  }

  // public setBuses(name: string) {
  //   if (this.companyName === name) {
  //     this.buses = this.buses1;
  //   } else if (this.companyName === name) {
  //     this.buses = this.buses2;
  //   } else if (this.companyName === name) {
  //     this.buses = this.buses3;
  //   } else {
  //     this.buses = this.buses9;
  //   }
  // }
}
