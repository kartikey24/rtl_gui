import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators'
import { Config } from './Config';


@Injectable({
  providedIn: 'root'
})
export class WebInterfaceService {

  private URL = 'http://kartikey24.pythonanywhere.com/polls/';

  options = {
    headers: new HttpHeaders({'Content-Type': 'application/json'}) 
  }
  constructor(
  	private http: HttpClient
  ) { }

  private handleError(error: HttpErrorResponse){
    alert('Unfortunately, your feedback could not be submitted :(');
    return throwError('Error in submitting form data via POST request')
  }

  submitData(inpData:  Config): Observable<Config>{

    return this.http.post<Config>(this.URL, inpData, this.options).pipe(
      catchError(this.handleError)
    )

  }
}
