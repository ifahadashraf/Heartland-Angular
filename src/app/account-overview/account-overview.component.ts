import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-overview',
  templateUrl: './account-overview.component.html',
  styleUrls: ['./account-overview.component.css']
})
export class AccountOverviewComponent implements OnInit {

  activeTab = 0;

  constructor() { }

  ngOnInit() {
  }

  switchAccountOverviewTabs(tabIndex) {
    this.activeTab = tabIndex;
  }
}
