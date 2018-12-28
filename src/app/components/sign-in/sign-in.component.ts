import { Component, OnInit } from '@angular/core';
import {CommonService} from '../../services/common/common.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private signinService: CommonService) { }

  ngOnInit() {
  }

  signIn(username, password) {
    shouldLoad
    this.signinService.loginService(username.value, password.value).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
