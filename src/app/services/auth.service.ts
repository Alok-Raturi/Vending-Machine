import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  email!: string;
  idToken!: string;
  accessToken!: string;
  refreshToken!: string;
  user!: any;

  constructor(private http: HttpClient) {}

  setTokens(){
    if (typeof window !== 'undefined') {
      let tokens = JSON.parse(localStorage.getItem('user-tokens') as string)
      if(tokens){
        this.idToken = tokens.idToken,
        this.email = tokens.email,
        this.accessToken = tokens.accessToken,
        this.refreshToken = tokens.refreshToken
      }
    }
  }

  signin(email: string, password: string) {
    return this.http
      .post(
        'https://fyid9ylv3a.execute-api.ap-south-1.amazonaws.com/v1/auth/login',
        {
          email,
          password,
        }
      )
      .pipe(
        tap({
          next: (data: any) => {
            this.email = email;
            this.idToken = data.idToken;
            this.accessToken = data.accessToken;
            this.refreshToken = data.refreshToken;
            localStorage.setItem("user-tokens",JSON.stringify({
              email:email,
              idToken: data.idToken,
              accessToken: data.accessToken,
              refreshToken: data.refreshToken
            }))
          },
        })
      );
  }

  signUp(email: string, password: string) {
    return this.http
      .post(
        'https://fyid9ylv3a.execute-api.ap-south-1.amazonaws.com/v1/auth/register',
        {
          body: {
            email,
            password,
          },
        }
      )
      .pipe(
        tap({
          next: () => {
            this.email = email;
          },
        })
      );
  }

  confirm(code: string) {
    return this.http.post(
      'https://fyid9ylv3a.execute-api.ap-south-1.amazonaws.com/v1/auth/confirm',
      {
        body: {
          code,
          email: this.email,
        },
      }
    );
  }

  logout() {
    return this.http
      .post(
        'https://fyid9ylv3a.execute-api.ap-south-1.amazonaws.com/v1/auth/logout',
        {
          headers: new HttpHeaders().set('Authorization', this.accessToken),
        }
      )
      .pipe(
        tap({
          next: () => {
            this.accessToken =
              this.idToken =
              this.refreshToken =
              this.email =
                '';
                localStorage.removeItem('user-tokens')
          },
        })
      );
  }

  get isTokenAvailable() {
    return this.accessToken && this.refreshToken && this.idToken && this.email;
  }

  getUser() {
    return this.http.get('https://fyid9ylv3a.execute-api.ap-south-1.amazonaws.com/v1/auth/user', {
      headers: new HttpHeaders().set('Authorization', this.accessToken),
    });
  }

  addAmount(amount:string){
    return this.http.post('https://fyid9ylv3a.execute-api.ap-south-1.amazonaws.com/v1/auth/update-balance',{
      body:{
        amount
      }
    },{
      headers: new HttpHeaders().set('Authorization', this.accessToken),
    })
  }
}
