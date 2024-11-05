import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(private http:HttpClient) { }

  fetchItems(){
    return this.http.get('https://pkfsy8xzzi.execute-api.ap-south-1.amazonaws.com/v1/user/items')
  }

  getItemByCode(code:string){
    return this.http.get(`https://pkfsy8xzzi.execute-api.ap-south-1.amazonaws.com/v1/user/item/${code}`)
  }

}
