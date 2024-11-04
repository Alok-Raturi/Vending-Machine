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
  products:Product[]=[]
  constructor(private itemService: ItemsService){}

  ngOnInit(): void {
    this.itemService.fetchItems().subscribe((data:any)=>{
      this.products=data;
    })
  }

}
