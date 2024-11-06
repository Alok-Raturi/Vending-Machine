import { AuthService } from './../../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { UpdateItemComponent } from './update-item/update-item.component';
import { SpinnerComponent } from '../../shared/spinner/spinner.component';
import { ItemsService } from '../../../services/items.service';

interface Product{
  Code:{
    'S':string,
  },
  price:{
    'N':string,
  },
  stock:{
    'N':string,
  },
  imagesrc:{
    'S':string,
  },
  name:{
    'S':string,
  },
}


@Component({
  selector: 'app-update-stocks',
  standalone: true,
  imports: [UpdateItemComponent,SpinnerComponent],
  templateUrl: './update-stocks.component.html',
  styleUrl: './update-stocks.component.css'
})
export class UpdateStocksComponent implements OnInit {
  products:Product[]=[]
  isloading=false
  constructor(private itemsService: ItemsService){}

  ngOnInit(): void {
    this.isloading=true
    this.itemsService.fetchItems().subscribe((data:any)=>{
      this.isloading=false
      this.products=data;
      this.isloading=false
    })
  }



}
