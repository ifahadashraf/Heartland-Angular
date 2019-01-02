import { Component, OnInit } from '@angular/core';
import {ConstantsService} from '../../services/constants/constants.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public wa: ConstantsService, private router: Router) { }

  ngOnInit() {
  }

  logout() {
    this.wa.isLoggedIn = false;
    this.router.navigate(['/signIn']);
    localStorage.clear();
  }

}
