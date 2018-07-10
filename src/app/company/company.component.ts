import { Component, OnInit } from '@angular/core';
import { Company } from '../models/company.model';
import { CompanyService } from './company.service';

@Component({
  selector: 'tcc-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  private companyService: CompanyService;

  // public companies: Company[] = [];
  public companies: Company[] = [
    {name: 'E1'}
  ];

  constructor() { }

  ngOnInit() {
    // Ir no serviço e pegar todos os companies
    // this.companyService.companies().subscribe(
    //   companies => {
    //     this.companies = companies;
    //   }
    // );
  }
}
