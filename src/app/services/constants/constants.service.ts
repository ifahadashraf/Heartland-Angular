import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstantsService {

  public furze = {
    clientId: 'lQVS05DGy9SQdAEInEPqTMK3aktEfSc7iupC7BYM4JY=',
    useLocalStorage: false,
    httpPrefix: 'http://',
    httpsPrefix: 'https://'
  };
  public shouldLoad = false;
  public isLoggedIn = false;

  accountToken = 'https://HCSAuthQA.ecsi.net/token';
  randomSecurityQuestion = 'https://HCSProfileQA.ecsi.net/api/v1/Profile/RandomSecurityQuestionByUserName';
  validateSecurityAnswer = 'https://HCSProfileQA.ecsi.net/api/v1/Account/IsValidSecurityAnswer';
  getConnections = 'https://HCSProfileQA.ecsi.net/api/v1/profile/DistinctUserAccounts';
  userAccounts = 'https://HCSProfileQA.ecsi.net/api/v1/Profile/UserAccounts';
  getFeatureSetsByProfile = 'https://HCSProfileQA.ecsi.net/api/v1/Profile/FeatureSetsByProfile';
  // getAccountOverview =
  constructor() { }
}
