import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { InfoNotification } from '../../models/infoNotification';
import { HeaderApp } from 'src/app/models/header-app';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {


  constructor(private http: HttpClient) { }


  /**
   * Function that called the api for add a new token of device
   * @param infoNotification 
   * @param token 
   */
  callAddInfoNotification(infoNotification: InfoNotification, token: string): Observable<HeaderApp> {
    let options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      })
    };   
    return this.http.post<HeaderApp>(environment.addToken, infoNotification, options)
  }


  /**
   * FUnction that called the api for updates a new token of device
   * @param infoNotification 
   * @param token 
   */
  callUpdateInfoNotification(infoNotification: InfoNotification, token: string): Observable<HeaderApp> {
    let options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      })
    };
    return this.http.post<HeaderApp>(environment.updateToken, infoNotification, options)
  }


}
