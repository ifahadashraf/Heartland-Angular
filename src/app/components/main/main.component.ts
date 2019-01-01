import { Component, OnInit } from '@angular/core';
import {HeartlandInfo} from '../../models/HeartlandInfo';
import {CommonService} from '../../services/common/common.service';
import {ConstantsService} from '../../services/constants/constants.service';
import {AccountInfo} from '../../models/AccountInfo';
import {plainToClass} from 'class-transformer';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  user: string;

  accountInfos: AccountInfo;

  heartlandInfo: HeartlandInfo[] = [
    {schoolName: 'University of Alabama',       heartlandKey: '02039-E3F79E7F2745'},
    {schoolName: 'South Hampshire University',  heartlandKey: '02110-T6TH7891GBJ1'},
    {schoolName: 'University of Melbourne',     heartlandKey: '02001-B12TH098F123'},
    {schoolName: 'University of Alabama',       heartlandKey: '02339-F3F3E987Y009'},
  ];


  constructor(private service: CommonService, private wa: ConstantsService) { }

  ngOnInit() {
    this.user = localStorage.getItem('user');
    this.wa.shouldLoad = true;
    this.service.getConnections(this.user)
      .subscribe(
        (response) => {
          this.wa.shouldLoad = false;
          // @ts-ignore
          const connections = plainToClass(AccountInfo, response.connectedAccountInfo);
        }
        ,
        (err) => {
          this.wa.shouldLoad = false;
          console.log(err);
        }
      );
    this.service.getUserAccounts(this.user)
      .subscribe(
        (response) => {
          this.wa.shouldLoad = false;
          console.log(response);
        },
        (err) => {
          this.wa.shouldLoad = false;
          console.log(err);
        }
      );
  }

}
