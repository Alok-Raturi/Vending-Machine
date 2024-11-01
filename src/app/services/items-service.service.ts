import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemsServiceService {

  constructor(private http:HttpClient) { }

  fetchItems(){
    return this.http.get('https://i0kiu2mbw6.execute-api.ap-south-1.amazonaws.com/v1/user/items')
  }
}
