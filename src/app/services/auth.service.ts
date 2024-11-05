import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import {jwtDecode} from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  email!: string;
  accessToken!: string;
  user!: any;
  role!:'User'|'Admin'

  constructor(private http: HttpClient) {}

  setTokens() {
    if (typeof window !== 'undefined') {
      const accessTokenItem= JSON.parse(localStorage.getItem('user-tokens') as string) ;
      if (!accessTokenItem) {
          return ;
      }
      const now = new Date();
      if (now.getTime() > accessTokenItem.expireTime) {
          localStorage.removeItem('user-tokens');
          return ;
      }

      this.email = accessTokenItem.value.email
      this.accessToken= accessTokenItem.value.accessToken
    }
  }

  decodeToken(): any {
    if (this.accessToken) {
      return jwtDecode(this.accessToken);
    }
    return null;
  }

  get roleValue(){
    let decodedToken = this.decodeToken()
    if(decodedToken['cognito:groups']){
      return this.decodeToken()['cognito:groups'][0]==='Admin'?1:0
    }
    return 0
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

            this.accessToken = data.accessToken;
            this.role = data.role
            const now = new Date();
            const accessTokenItem = {
              value: {
                email:this.email,
                accessToken: data.accessToken,
              },
              expireTime: now.getTime() +  60 * 60 * 1000
          };
            localStorage.setItem(
              'user-tokens',
              JSON.stringify(accessTokenItem)
            );
          },
        })
      );
  }

  signUp(email: string, password: string) {
    return this.http
      .post(
        'https://fyid9ylv3a.execute-api.ap-south-1.amazonaws.com/v1/auth/register',
        {
            email,
            password,
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
          code,
          email: this.email,
      }
    );
  }

  logout() {
    return this.http
      .post(
        'https://fyid9ylv3a.execute-api.ap-south-1.amazonaws.com/v1/auth/logout',{},
        {
          headers: new HttpHeaders().set('Authorization', this.accessToken),
        }
      )
      .pipe(
        tap({
          next: () => {
            this.accessToken = this.email = '';
            localStorage.removeItem('user-tokens');
          },
        })
      );
  }

  get isTokenAvailable() {
    return this.accessToken && this.email;
  }

  getUser() {
    return this.http.get(
      'https://fyid9ylv3a.execute-api.ap-south-1.amazonaws.com/v1/auth/user',
      {
        headers: new HttpHeaders().set('Authorization', this.accessToken),
      }
    );
  }

  addAmount(amount: string) {
    return this.http.post(
      'https://fyid9ylv3a.execute-api.ap-south-1.amazonaws.com/v1/auth/update-balance',
      {
        amount
      },
      {
        headers: new HttpHeaders().set('Authorization', this.accessToken),
      }
    );
  }

  buyItem(code:string){
    return this.http.post('https://fyid9ylv3a.execute-api.ap-south-1.amazonaws.com/v1/purchase/dispatch',{
      'code':code
    },{
      headers:new HttpHeaders().set('Authorization',this.accessToken)
    })
  }
}
