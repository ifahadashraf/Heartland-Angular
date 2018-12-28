import {Component} from '@angular/core';

@Component({
  selector: 'app-loader',
  template: `
    <div class="loader"></div>
  `,
  styles: [`
    #loader {
      position: fixed;
      left: 0px;
      top: 0px;
      width: 100%;
      height: 100%;
      z-index: 9999;
      background: url('../../../assets/images/loader.gif') 50% 50% no-repeat grey;
    }
  `]
})

export class LoaderComponent {
}
