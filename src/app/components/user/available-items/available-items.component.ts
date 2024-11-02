import { Component, OnInit } from '@angular/core';
import { ItemComponent } from './item/item.component';
import { DisplayUserInfoComponent } from './display-user-info/display-user-info.component';
import { ItemsService } from '../../../services/items.service';
import { ConsiderationsComponent } from '../considerations/considerations.component';

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
  selector: 'app-available-items',
  standalone: true,
  imports: [ItemComponent,DisplayUserInfoComponent,ConsiderationsComponent],
  templateUrl: './available-items.component.html',
  styleUrl: './available-items.component.css',
})
export class AvailableItemsComponent implements OnInit {
  layout:'list'|'grid'="grid"
  // products = [
  //   {
  //     code: 'A1',
  //     name: 'Cola',
  //     price: 1.5,
  //     stock: 5,
  //     imagesrc:
  //       'https://images.unsplash.com/photo-1592232583482-ec6367cfb786?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29jYSUyMGNvbGF8ZW58MHx8MHx8fDA%3D',
  //   },
  //   {
  //     code: 'A2',
  //     name: 'Chips',
  //     price: 1.0,
  //     stock: 3,
  //     imagesrc:
  //       'https://images.unsplash.com/photo-1592232583482-ec6367cfb786?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29jYSUyMGNvbGF8ZW58MHx8MHx8fDA%3D',
  //   },
  //   {
  //     code: 'A3',
  //     name: 'Candy Bar',
  //     price: 0.75,
  //     stock: 8,
  //     imagesrc:
  //       'https://images.unsplash.com/photo-1592232583482-ec6367cfb786?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29jYSUyMGNvbGF8ZW58MHx8MHx8fDA%3D',
  //   },
  //   {
  //     code: 'B1',
  //     name: 'Water',
  //     price: 1.25,
  //     stock: 6,
  //     imagesrc:
  //       'https://images.unsplash.com/photo-1592232583482-ec6367cfb786?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29jYSUyMGNvbGF8ZW58MHx8MHx8fDA%3D',
  //   },
  //   {
  //     code: 'B2',
  //     name: 'Energy Drink',
  //     price: 2.0,
  //     stock: 4,
  //     imagesrc:
  //       'https://images.unsplash.com/photo-1592232583482-ec6367cfb786?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29jYSUyMGNvbGF8ZW58MHx8MHx8fDA%3D',
  //   },
  //   {
  //     code: 'B3',
  //     name: 'Gum',
  //     price: 0.5,
  //     stock: 10,
  //     imagesrc:
  //       'https://images.unsplash.com/photo-1592232583482-ec6367cfb786?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29jYSUyMGNvbGF8ZW58MHx8MHx8fDA%3D',
  //   },
  //   {
  //     code: 'C1',
  //     name: 'Cookies',
  //     price: 1.25,
  //     stock: 7,
  //     imagesrc:
  //       'https://images.unsplash.com/photo-1592232583482-ec6367cfb786?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29jYSUyMGNvbGF8ZW58MHx8MHx8fDA%3D',
  //   },
  //   {
  //     code: 'C2',
  //     name: 'Nuts',
  //     price: 1.75,
  //     stock: 5,
  //     imagesrc:
  //       'https://images.unsplash.com/photo-1592232583482-ec6367cfb786?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29jYSUyMGNvbGF8ZW58MHx8MHx8fDA%3D',
  //   },
  //   {
  //     code: 'C3',
  //     name: 'Popcorn',
  //     price: 1.0,
  //     stock: 9,
  //     imagesrc:
  //       'https://images.unsplash.com/photo-1592232583482-ec6367cfb786?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29jYSUyMGNvbGF8ZW58MHx8MHx8fDA%3D',
  //   },
  // ];
  products:Product[]=[]
  constructor(private itemService: ItemsService){}

  ngOnInit(): void {
    this.itemService.fetchItems().subscribe((data:any)=>{
      this.products=data;
    })
  }

}
