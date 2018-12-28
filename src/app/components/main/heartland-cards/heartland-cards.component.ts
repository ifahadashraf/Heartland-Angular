import {Component, Input, OnInit} from '@angular/core';
import {HeartlandInfo} from '../../../models/HeartlandInfo';

@Component({
  selector: 'app-heartland-cards',
  templateUrl: './heartland-cards.component.html',
  styleUrls: ['./heartland-cards.component.css']
})
export class HeartlandCardsComponent implements OnInit {

  @Input( ) model: HeartlandInfo;

  constructor() { }

  ngOnInit() {

  }

}
