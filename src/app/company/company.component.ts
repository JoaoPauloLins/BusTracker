import { Component, OnInit } from '@angular/core';
import { Company } from '../models/company.model';
import { CompanyService } from './company.service';

@Component({
  selector: 'tcc-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  // public companies: Company[] = [];
  public companies: Company[] = [
    {name: 'E1'},
    {name: 'E2'},
    {name: 'E3'},
    {name: 'E9'}
  ];

  constructor(private companyService: CompanyService) { }

  ngOnInit() {

    const company: Company = new Company('');

    this.companyService.companies().subscribe(
      data => { data.forEach(name => {
        company.name = name;
        this.companies.push(company);
      });
    },
      err => console.error(err),
      () => console.log('done loading companies')
    );
  }
}
