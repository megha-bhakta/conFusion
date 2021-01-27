import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {Leader} from 'src/app/model/leader';
import{LEADERS} from 'src/app/service/leader';
import { catchError, map} from 'rxjs/operators';
import {baseURL} from 'src/app/service/baseurl';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { ProcesshttpmsgService} from 'src/app/service/processhttpmsg.service';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor(private http:HttpClient,
              private processHttpMsgService:ProcesshttpmsgService) { }

  getLeaders(): Observable<Leader[]>{
    return this.http.get<Leader[]>(baseURL + 'leadership')
    .pipe(catchError(this.processHttpMsgService.handleError));
  }

  getLeader(id: string): Observable<Leader> {
    return this.http.get<Leader>(baseURL + 'leadership/' + id)
    .pipe(catchError(this.processHttpMsgService.handleError));
  }

  getFeaturedLeader(): Observable<Leader> {
    return this.http.get<Leader>(baseURL + 'leadership?featured=true').pipe(map(leaders => leaders[0]))
    .pipe(catchError(this.processHttpMsgService.handleError));
  }
}
