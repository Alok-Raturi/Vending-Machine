import { Injectable } from '@angular/core';
import {signUp} from 'aws-amplify/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {
  }

  signin(){

  }

  signUp(username:string,email: string, password: string) {
    return signUp({
      username,
      password,
      options:{
        userAttributes:{
          email
        }
      }
    });
}

  confirm(){}
}
