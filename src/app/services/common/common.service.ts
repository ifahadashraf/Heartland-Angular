import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ConstantsService} from '../constants/constants.service';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient, private wa: ConstantsService) { }

  loginService(userName, password) {
    const data = 'grant_type=password&username=' + userName + '&password=' + password + '&client_id=' + this.wa.furze.clientId;
    return this.http.post(this.wa.accountToken, data, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } });
  }
}
