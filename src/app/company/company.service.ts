import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Params } from '@angular/router';

import * as socketIo from 'socket.io-client';
import { Tracker } from '../models/tracker.model';
import { Event } from '../models/event';

const SERVER_URL = 'http://localhost:8081';

@Injectable()
export class CompanyService {
  private socket;

  constructor(private httpClient: HttpClient) { }

  companies(): Observable<any> {
    return this.httpClient.get('http://localhost:8080/getAllCompanies');
  }

  buses(companyName: string): Observable<any> {
    return this.httpClient.get(`http://localhost:8080/companies/${companyName}/bus`);
  }

  tracker(params: string): void {
    const companyName = params.split(':', 2)[0];
    const busRegistration = params.split(':', 2)[1];
    this.httpClient.get(`http://localhost:8080/sendParams/${companyName}/${busRegistration}`);
    this.httpClient.get(`http://localhost:8080/bancoEsper`);
  }

  public initSocket(): void {
    this.socket = socketIo(SERVER_URL);
  }

  public send(params: any): void {
    this.socket.emit('parametros', params);
  }

  public onMessage(): Observable<Tracker> {
    return new Observable<Tracker>(observer => {
        this.socket.on('mensagem', (data: Tracker) => observer.next(data));
    });
  }

  public onEvent(event: Event): Observable<any> {
    return new Observable<Event>(observer => {
        this.socket.on(event, () => observer.next());
    });
  }
}
