import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class WebInterfaceService {

  private URL = 'http://kartikey24.pythonanywhere.com/polls/';

  constructor(
  	private http: HttpClient
  ) { }

  private handleError(error: HttpErrorResponse){
    alert('Unfortunately, your feedback could not be submitted :(');
    return throwError('Error in submitting form data via POST request')
  }

  submitFormData(formData: Config): Observable<Config>{

    return this.http.post<Config>(this.URL, formData, this.options).pipe(
      catchError(this.handleError)
    )

  }
}
