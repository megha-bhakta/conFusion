import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Feedback } from '../model/feedback';
import { baseURL } from './baseurl';
import { ProcesshttpmsgService} from 'src/app/service/processhttpmsg.service';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private http:HttpClient,
              private processHttpMsgService: ProcesshttpmsgService) { }

  submitFeedback(feedback: Feedback) :Observable<Feedback>{
    const httpOptions={
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.post<Feedback>(baseURL + 'feedback',feedback, httpOptions)
    .pipe(catchError(this.processHttpMsgService.handleError));
  }
}
