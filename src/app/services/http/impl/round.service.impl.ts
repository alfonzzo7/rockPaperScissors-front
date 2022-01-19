import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Round } from 'src/app/model/round.model';
import { Total } from 'src/app/model/total.model';
import { IRoundRestService } from '../round.service';

@Injectable()
export class RoundRestService implements IRoundRestService {
  private readonly url: string;
  private readonly apiPath: string;
  constructor(private readonly http: HttpClient) {
    this.url = 'https://pacific-ridge-28086.herokuapp.com/api-rock-paper-scissors/';
    this.apiPath = `${this.url}api/v1/rounds`;
  }

  playRound(): Observable<Round> {
    return this.http.post<Round>(`${this.apiPath}/`, null);
  }

  getTotal(): Observable<Total> {
    return this.http.get<Total>(`${this.apiPath}/`);
  }

  deleteTotal(): any {
    return this.http.delete(`${this.apiPath}/`);
  }
}
