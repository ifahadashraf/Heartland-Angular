import { Component, OnInit } from '@angular/core';
import {HeartlandInfo} from '../../models/HeartlandInfo';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  heartlandInfo: HeartlandInfo[] = [
    {schoolName: 'University of Alabama',       heartlandKey: '02039-E3F79E7F2745'},
    {schoolName: 'South Hampshire University',  heartlandKey: '02110-T6TH7891GBJ1'},
    {schoolName: 'University of Melbourne',     heartlandKey: '02001-B12TH098F123'},
    {schoolName: 'University of Alabama',       heartlandKey: '02339-F3F3E987Y009'},
  ];


  constructor() { }

  ngOnInit() {
  }

}
