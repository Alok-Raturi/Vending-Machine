import { AuthService } from './auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient,private authService:AuthService) { }

  addProduct(product:{name:string, price:string, stock:string,imagesrc:string}){
      return this.http.post('https://11350r2ind.execute-api.ap-south-1.amazonaws.com/v1/admin/add-product',product,{
        headers: new HttpHeaders().set('Authorization',this.authService.accessToken)
      })
  }

  updateStock(code:string,quantity:string){
    return this.http.post(`https://11350r2ind.execute-api.ap-south-1.amazonaws.com/v1/admin/update-stock/${code}`,{
      quantity
    },{
      headers: new HttpHeaders().set('Authorization',this.authService.accessToken)
    })
  }
}
