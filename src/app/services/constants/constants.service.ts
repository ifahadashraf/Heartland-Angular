import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstantsService {

  public accountToken = 'https://HCSAuthQA.ecsi.net/token';
  public furze = {
                    clientId: 'lQVS05DGy9SQdAEInEPqTMK3aktEfSc7iupC7BYM4JY=',
                    useLocalStorage: false,
                    httpPrefix: 'http://',
                    httpsPrefix: 'https://'
                  };
  public shouldLoad = false;


  constructor() { }
}
