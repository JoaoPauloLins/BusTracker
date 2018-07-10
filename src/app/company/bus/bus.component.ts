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
  // public buses: Bus[] = [
  //   {registration: 1111}
  // ];

  constructor(private companyService: CompanyService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.companyName = this.route.snapshot.paramMap.get('name');
    console.log(this.companyName);

    this.companyService.buses(this.companyName).subscribe(
      data => { this.buses = data},
      err => console.error(err),
      () => console.log('done loading buses')
    );
  }
}
