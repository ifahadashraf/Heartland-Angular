/* tslint:disable:forin */
import { Component, OnInit } from '@angular/core';
import {CommonService} from '../../services/common/common.service';
import {ConstantsService} from '../../services/constants/constants.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-security-question',
  templateUrl: './security-question.component.html',
  styleUrls: ['./security-question.component.css']
})
export class SecurityQuestionComponent implements OnInit {

  private user;
  securityQuestion: string;
  private nav_Info = {
    'os' : null,
    'browser' : null,
    'isMobileDevice' : null,
    'accessType' : null
  };
  private data;

  constructor(private service: CommonService, private wa: ConstantsService,
              private router: Router) { }

  ngOnInit() {
    this.user = localStorage.getItem('user');
    this.wa.shouldLoad = true;
    this.service.getRandomSecurityQuestion(this.user).subscribe(
      (response) => {
        this.wa.shouldLoad = false;
        // @ts-ignore
        this.securityQuestion = response.question;
        this.data = response;
        console.log(response);
      },
      (err) => {
        this.wa.shouldLoad = false;
        console.log(err);
      });
    this.getNavInfo();
  }

  getNavInfo() {

    const unknown = '-';

    // screen
    let screenSize = '';
    if (screen.width) {
      const width = (screen.width) ? screen.width : '';
      const height = (screen.height) ? screen.height : '';
      screenSize += '' + width + ' x ' + height;
    }

    // browser
    const nVer = navigator.appVersion;
    const nAgt = navigator.userAgent;
    let browser = navigator.appName;
    let version = '' + parseFloat(navigator.appVersion);
    let majorVersion = parseInt(navigator.appVersion, 10);
    let nameOffset, verOffset, ix;

    // Opera
    if ((verOffset = nAgt.indexOf('Opera')) !== -1) {
      browser = 'Opera';
      version = nAgt.substring(verOffset + 6);
      if ((verOffset = nAgt.indexOf('Version')) !== -1) {
        version = nAgt.substring(verOffset + 8);
      }
    }
    // Opera Next
    if ((verOffset = nAgt.indexOf('OPR')) !== -1) {
      browser = 'Opera';
      version = nAgt.substring(verOffset + 4);
    } else if ((verOffset = nAgt.indexOf('Edge')) !== -1) {
      browser = 'Microsoft Edge';
      version = nAgt.substring(verOffset + 5);
    } else if ((verOffset = nAgt.indexOf('MSIE')) !== -1) {
      browser = 'Microsoft Internet Explorer';
      version = nAgt.substring(verOffset + 5);
    } else if ((verOffset = nAgt.indexOf('Chrome')) !== -1) {
      browser = 'Chrome';
      version = nAgt.substring(verOffset + 7);
    } else if ((verOffset = nAgt.indexOf('Safari')) !== -1) {
      browser = 'Safari';
      version = nAgt.substring(verOffset + 7);
      if ((verOffset = nAgt.indexOf('Version')) !== -1) {
        version = nAgt.substring(verOffset + 8);
      }
    } else if ((verOffset = nAgt.indexOf('Firefox')) !== -1) {
      browser = 'Firefox';
      version = nAgt.substring(verOffset + 8);
    } else if (nAgt.indexOf('Trident/') !== -1) {
      browser = 'Microsoft Internet Explorer';
      version = nAgt.substring(nAgt.indexOf('rv:') + 3);
    } else if ((nameOffset = nAgt.lastIndexOf(' ') + 1) < (verOffset = nAgt.lastIndexOf('/'))) {
      browser = nAgt.substring(nameOffset, verOffset);
      version = nAgt.substring(verOffset + 1);
      if (browser.toLowerCase() === browser.toUpperCase()) {
        browser = navigator.appName;
      }
    }
    // trim the version string
    if ((ix = version.indexOf(';')) !== -1) { version = version.substring(0, ix); }
    if ((ix = version.indexOf(' ')) !== -1) { version = version.substring(0, ix); }
    if ((ix = version.indexOf(')')) !== -1) { version = version.substring(0, ix); }

    majorVersion = parseInt('' + version, 10);
    if (isNaN(majorVersion)) {
      version = '' + parseFloat(navigator.appVersion);
      majorVersion = parseInt(navigator.appVersion, 10);
    }

    // mobile version
    const mobile = /Mobile|mini|Fennec|Android|iP(ad|od|hone)/.test(nVer);

    // cookie
    let cookieEnabled = (navigator.cookieEnabled) ? true : false;

    if (typeof navigator.cookieEnabled === 'undefined' && !cookieEnabled) {
      document.cookie = 'testcookie';
      cookieEnabled = (document.cookie.indexOf('testcookie') !== -1) ? true : false;
    }

    // system
    let os = unknown;
    const clientStrings = [
      { s: 'Windows 10', r: /(Windows 10.0|Windows NT 10.0)/ },
      { s: 'Windows 8.1', r: /(Windows 8.1|Windows NT 6.3)/ },
      { s: 'Windows 8', r: /(Windows 8|Windows NT 6.2)/ },
      { s: 'Windows 7', r: /(Windows 7|Windows NT 6.1)/ },
      { s: 'Windows Vista', r: /Windows NT 6.0/ },
      { s: 'Windows Server 2003', r: /Windows NT 5.2/ },
      { s: 'Windows XP', r: /(Windows NT 5.1|Windows XP)/ },
      { s: 'Windows 2000', r: /(Windows NT 5.0|Windows 2000)/ },
      { s: 'Windows ME', r: /(Win 9x 4.90|Windows ME)/ },
      { s: 'Windows 98', r: /(Windows 98|Win98)/ },
      { s: 'Windows 95', r: /(Windows 95|Win95|Windows_95)/ },
      { s: 'Windows NT 4.0', r: /(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/ },
      { s: 'Windows CE', r: /Windows CE/ },
      { s: 'Windows 3.11', r: /Win16/ },
      { s: 'Android', r: /Android/ },
      { s: 'Open BSD', r: /OpenBSD/ },
      { s: 'Sun OS', r: /SunOS/ },
      { s: 'Linux', r: /(Linux|X11)/ },
      { s: 'iOS', r: /(iPhone|iPad|iPod)/ },
      { s: 'Mac OS X', r: /Mac OS X/ },
      { s: 'Mac OS', r: /(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/ },
      { s: 'QNX', r: /QNX/ },
      { s: 'UNIX', r: /UNIX/ },
      { s: 'BeOS', r: /BeOS/ },
      { s: 'OS/2', r: /OS\/2/ },
      { s: 'Search Bot', r: /(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/ }
    ];
    for (const id in clientStrings) {
      const cs = clientStrings[id];
      if (cs.r.test(nAgt)) {
        os = cs.s;
        break;
      }
    }

    let osVersion = unknown;

    if (/Windows/.test(os)) {
      osVersion = /Windows (.*)/.exec(os)[1];
      os = 'Windows';
    }

    switch (os) {
      case 'Mac OS X':
        osVersion = /Mac OS X (10[\.\_\d]+)/.exec(nAgt)[1];
        break;

      case 'Android':
        osVersion = /Android ([\.\_\d]+)/.exec(nAgt)[1];
        break;

      case 'iOS':
        osVersion = /OS (\d+)_(\d+)_?(\d+)?/.exec(nVer)[1];
        osVersion = osVersion[1] + '.' + osVersion[2] + '.' + osVersion[3];
        break;
    }

    this.nav_Info.os = os + '' + osVersion;
    this.nav_Info.browser = browser + '' + majorVersion;
    this.nav_Info.isMobileDevice = mobile;
    this.nav_Info.accessType = 'Web';
  }

  validateAnswer(answer) {
    this.wa.shouldLoad = true;
    this.service.validateAnswer(this.data.profileId, this.data.id, answer.value, this.nav_Info.os,
      this.nav_Info.browser, this.nav_Info.isMobileDevice, this.nav_Info.accessType)
      .subscribe(
        (response) => {
          this.wa.shouldLoad = false;
          if (response) {
            this.router.navigate(['/main']);
          }
        },
        (err) => {
          this.wa.shouldLoad = false;
          console.log(err);
        });
  }
}
