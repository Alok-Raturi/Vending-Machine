import { AdminService } from './../../../../services/admin.service';
import { CurrencyPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';


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
  selector: 'app-update-item',
  standalone: true,
  imports: [CurrencyPipe,FormsModule],
  templateUrl: './update-item.component.html',
  styleUrl: './update-item.component.css'
})
export class UpdateItemComponent {
  constructor(private adminService:AdminService){}
  @Input() product!:Product

  onSubmit(code:string,quantity:string){
      this.adminService.updateStock(code,quantity).subscribe((data)=>console.log(data))
  }
}
