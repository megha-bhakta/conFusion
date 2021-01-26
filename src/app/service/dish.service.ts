import { Injectable } from '@angular/core';
import { Dish} from 'src/app/model/dish';
import { Observable, of } from 'rxjs';
import {baseURL} from 'src/app/service/baseurl';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, map} from 'rxjs/operators';
import { ProcesshttpmsgService} from 'src/app/service/processhttpmsg.service';


@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor(private http:HttpClient,
              private processHttpMsgService: ProcesshttpmsgService) { }

  getDishes(): Observable<Dish[]> {
    return this.http.get<Dish[]>(baseURL + 'dishes')
    .pipe(catchError(this.processHttpMsgService.handleError));
  }

  getDish(id: number): Observable<Dish> {
    return this.http.get<Dish>(baseURL + 'dishes/' + id)
    .pipe(catchError(this.processHttpMsgService.handleError));
  }

  getFeaturedDish(): Observable<Dish> {
    return this.http.get<Dish[]>(baseURL + 'dishes?featured=true').pipe(map(dishes => dishes[0]))
    .pipe(catchError(this.processHttpMsgService.handleError));
  }

  getIds(): Observable<number[] | any> {
    return this.getDishes().pipe(map(dishes => dishes.map(dish => dish.id)))
    .pipe(catchError(error => error));
  }

  putDish(dish: Dish) :Observable<Dish>{
    const httpOptions={
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.put<Dish>(baseURL + 'dishes/' + dish.id, dish, httpOptions)
    .pipe(catchError(this.processHttpMsgService.handleError));
  }
}
