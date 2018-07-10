import { Component, OnInit } from '@angular/core';
import { Company } from '../models/company.model';
import { CompanyService } from './company.service';

@Component({
  selector: 'tcc-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  public companies: Company[] = [];
  // public companies: Company[] = [
  //   {name: 'E1'}
  // ];

  constructor(private companyService: CompanyService) { }

  ngOnInit() {

    this.companyService.companies().subscribe(
      data => { this.companies = data},
      err => console.error(err),
      () => console.log('done loading companies')
    );
  }
}
