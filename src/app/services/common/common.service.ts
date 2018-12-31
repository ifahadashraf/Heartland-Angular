import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ConstantsService} from '../constants/constants.service';

@Injectable({
  providedIn: 'root'
})
export class CommonService implements OnInit {

  constructor(private http: HttpClient, private wa: ConstantsService) { }

  ngOnInit() {
    localStorage.setItem('Authorization', null);
  }

  loginService(userName, password) {
    const data = 'grant_type=password&username=' + userName + '&password=' + password + '&client_id=' + this.wa.furze.clientId;
    return this.http.post(this.wa.accountToken, data, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } });
  }

  getRandomSecurityQuestion(userName) {

    return this.http.get(this.wa.randomSecurityQuestion + '?username=' + userName,
      {headers : {'Authorization' : localStorage.getItem('Authorization')} });

  }

  validateAnswer(profileId, questionId, answer, os, browser, mobile, access) {
    const params =
      '?profileId=' + profileId +
      '&questionId=' + questionId +
      '&answer=' + answer +
      '&os=' + os +
      '&browser=' + browser +
      '&mobile=' + mobile +
      '&access=' + access;
    return this.http.get(this.wa.validateSecurityAnswer + params,
      {headers : {'Authorization' : localStorage.getItem('Authorization')} });
  }
}
