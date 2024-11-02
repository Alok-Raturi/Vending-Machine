import { TagModule } from 'primeng/tag';
import { CurrencyPipe } from '@angular/common';
import { Component, input } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [CurrencyPipe,TagModule,ButtonModule],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css',
})
export class ItemComponent {
  product = input<{
    Code:{
      'S':string
    },
    price:{
      'N':string
    },
    stock:{
      'N':string
    },
    imagesrc:{
      'S':string
    },
    name:{
      'S':string
    }
  }>();

  dispatchDialog(){

  }
}
