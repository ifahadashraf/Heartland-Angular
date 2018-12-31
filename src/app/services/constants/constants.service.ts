import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstantsService {

  accountToken = 'https://HCSAuthQA.ecsi.net/token';
  randomSecurityQuestion = 'https://HCSProfileQA.ecsi.net/api/v1/Profile/RandomSecurityQuestionByUserName';
  validateSecurityAnswer = 'https://HCSProfileQA.ecsi.net/api/v1/Account/IsValidSecurityAnswer';
  public furze = {
                    clientId: 'lQVS05DGy9SQdAEInEPqTMK3aktEfSc7iupC7BYM4JY=',
                    useLocalStorage: false,
                    httpPrefix: 'http://',
                    httpsPrefix: 'https://'
                  };
  public shouldLoad = false;


  constructor() { }
}
