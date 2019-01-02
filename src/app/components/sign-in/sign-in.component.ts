import { Component, OnInit } from '@angular/core';
import {CommonService} from '../../services/common/common.service';
import {ConstantsService} from '../../services/constants/constants.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  err = false;

  constructor(private signinService: CommonService, private wa: ConstantsService, private router: Router) { }

  ngOnInit() {
  }

  signIn(username, password) {
    this.wa.shouldLoad = true;
    this.signinService.loginService(username.value, password.value).subscribe(
      (response) => {
        this.wa.shouldLoad = false;
        console.log(response);

        // @ts-ignore
        const indicia = { access_token: response.access_token, refresh_token: response.refresh_token };
        // @ts-ignore
        localStorage.setItem('Authorization', 'bearer ' + response.access_token);
        localStorage.setItem('user', username.value);
        // this.localStorage.setItemSubscribe('indicia', indicia);

        this.wa.isLoggedIn = true;
        this.router.navigate(['/securityQuestion']);

      },
      (error) => {
        this.wa.shouldLoad = false;
        console.log(error);
        this.err = true;
      }
    );
  }

}
