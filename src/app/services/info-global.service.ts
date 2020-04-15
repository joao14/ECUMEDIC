import { Injectable } from '@angular/core';
import { LoginResponse } from '../models/login-response';

@Injectable({
  providedIn: 'root'
})
export class InfoGlobalService {

  public loginr: LoginResponse;
  constructor() {
    this.loginr = new LoginResponse();
  }



}
