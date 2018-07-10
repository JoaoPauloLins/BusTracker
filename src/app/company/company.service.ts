import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Params } from '@angular/router';

@Injectable()
export class CompanyService {

  constructor(private httpClient: HttpClient) { }

  companies(): Observable<any> {
    return this.httpClient.get('http://localhost:8080/kompany');
  }

  buses(params?: Params): Observable<any> {
    return this.httpClient.get(`http://localhost:8080/companies/${params.name}/bus`);
  }

  tracker(params?: Params) {
  }
}
