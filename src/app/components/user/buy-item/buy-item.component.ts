import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { ItemsService } from '../../../services/items.service';

import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-buy-item',
  standalone: true,
  imports: [CurrencyPipe,RouterLink],
  templateUrl: './buy-item.component.html',
  styleUrl: './buy-item.component.css',
})
export class BuyItemComponent implements OnInit {
  product!: any;
  code!: string;
  user!: any;
  error!: string;
  constructor(
    private activatedRoute: ActivatedRoute,
    private authService: AuthService,
    private itemService: ItemsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (this.authService.isTokenAvailable) {
      this.authService.getUser().subscribe((data) => (this.user = data));

      this.activatedRoute.params.subscribe((params) => {
        this.code = params['code'];
        this.itemService
          .getItemByCode(this.code)
          .subscribe((data: any) => (this.product = data.item));
      });
    }
  }

  dispatch() {
    this.authService.buyItem(this.code).subscribe({
      next: (data)=>{
        console.log(data)
      }
    })
  }
}
