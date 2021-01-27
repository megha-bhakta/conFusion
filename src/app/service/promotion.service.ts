import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, delay } from 'rxjs/operators';
import {Promotion} from 'src/app/model/promotion';
import {PROMOTIONS} from '../service/Promotions';
import {baseURL} from 'src/app/service/baseurl';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { map} from 'rxjs/operators';
import { ProcesshttpmsgService} from 'src/app/service/processhttpmsg.service';


@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor(private http:HttpClient,
              private processHttpMsgService:ProcesshttpmsgService) { }

  getPromotions(): Observable<Promotion[]>{
    return this.http.get<Promotion[]>(baseURL + 'promotions')
    .pipe(catchError(this.processHttpMsgService.handleError));
  }

  getPromotion(id: string): Observable<Promotion> {
    return this.http.get<Promotion>(baseURL + 'promotions/' + id)
    .pipe(catchError(this.processHttpMsgService.handleError));
  }

  getFeaturedPromotion(): Observable<Promotion> {
    return this.http.get<Promotion>(baseURL + 'promotions?featured=true').pipe(map(promotions => promotions[0]))
    .pipe(catchError(this.processHttpMsgService.handleError));
  }
}
