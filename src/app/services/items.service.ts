import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(private http:HttpClient) { }

  fetchItems(){
    return this.http.get('https://484g7buxa0.execute-api.ap-south-1.amazonaws.com/v1/user/items')
  }

  getItemByCode(code:string){
    return this.http.get(`https://484g7buxa0.execute-api.ap-south-1.amazonaws.com/v1/user/item?code=${code}`)
  }

  updateQuantity(code:string){
    return this.http.put(`https://484g7buxa0.execute-api.ap-south-1.amazonaws.com/v1/user/update-quantity`,{
      body:{
        code
      }
    })
  }
}