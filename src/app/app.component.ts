import { Component } from '@angular/core';
import {ConstantsService} from './services/constants/constants.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ConstantsService]
})
export class AppComponent {
  title = 'Angular7';

  constructor(public wa: ConstantsService) {
  }
}
