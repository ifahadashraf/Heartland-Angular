import {Component, Input, OnInit} from '@angular/core';
import {HeartlandInfo} from '../../../models/HeartlandInfo';
import {Subject} from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-heartland-cards',
  templateUrl: './heartland-cards.component.html',
  styleUrls: ['./heartland-cards.component.css']
})
export class HeartlandCardsComponent implements OnInit {

  @Input( ) model;
  imagePath;

  public heartlandCardSubject;

  constructor(private router: Router) { }

  ngOnInit() {
    this.heartlandCardSubject = new Subject();
    this.imagePath = this.model.account.cdnServer + '/' + JSON.parse(this.model.account.scheme).BackgroundImage;
  }

  gotoAccountOverview(buId) {
    localStorage.buId = buId;
    localStorage.heartlandKey = this.model.heartlandId;
    localStorage.plainHeartlandKey = this.model.plainHeartlandId;
    localStorage.productCode = this.model.account.productCode;
    this.router.navigate(['/accountOverview']);
  }
}
