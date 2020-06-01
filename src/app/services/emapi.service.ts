import { PlanalimResponse } from './../models/planalim-response';
import { TablealimResponse } from './../models/tablealim-response';
import { SeriesResponse } from './../models/series-response';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { LoginResponse } from '../models/login-response';
import { Credencial } from '../models/credencial';

@Injectable({
  providedIn: 'root'
})
export class EmapiService {

  /** URL BASE */
  URL_BASE = 'http://localhost:8080/em/api/paciente';

  constructor(private http: HttpClient) {   

  }

  /** Http Options */
  httpOptions = {
    headers: new HttpHeaders({  
      'Content-Type': 'application/json'
    }) 
  }

  /** Captura de errores */
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };

  /**
   * Call Login
   * @param credencial 
   */
  callLogin(credencial: Credencial): Observable<LoginResponse> {
    return this.http
      .post<LoginResponse>(this.URL_BASE + '/loginp', JSON.stringify(credencial), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  /**
   * Call Series
   * @param numeident 
   * @param token 
   */
  callSeries(numeident: string, token: string): Observable<SeriesResponse> {
    let opt = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      })
    }

    return this.http
      .get<SeriesResponse>(this.URL_BASE + '/chart/series/' + numeident, opt)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }


  /**
  * Call Tabla Alimentos
  * @param consId 
  * @param token 
  */
  callTableFood(consId: number, token: string): Observable<TablealimResponse> {
    let opt = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      })
    }

    return this.http
      .get<TablealimResponse>(this.URL_BASE + '/ta/' + consId, opt)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  /**
 * Call Plan Alimentos
 * @param consId 
 * @param token 
 */
  callPlanFood(consId: number, token: string): Observable<PlanalimResponse> {
    let opt = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      })
    }

    return this.http
      .get<PlanalimResponse>(this.URL_BASE + '/pa/' + consId, opt)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

}
