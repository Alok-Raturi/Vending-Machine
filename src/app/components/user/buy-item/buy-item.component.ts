import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { ItemsService } from '../../../services/items.service';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-buy-item',
  standalone: true,
  imports: [TagModule,ButtonModule,CurrencyPipe,RouterLink],
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
          .subscribe((data: any) => (this.product = data.item.Item));
      });
    }
  }

  dispatch() {
    let price = parseInt(this.product.price['N']);
    let quantity = parseInt(this.product.stock['N']);
    let balance = parseInt(this.user.balance);
    if (quantity >= 1) {
      if (balance >= price) {
        this.authService.addAmount(`-${price}`).subscribe({
          next: () => {
            this.itemService.updateQuantity(this.code).subscribe({
              next:()=>{
                this.router.navigate(['/home']);
              }
            });
          },
        });
      } else {
        this.error = 'Insufficient balance. Please recharge your card';
      }
    } else {
      this.error = 'Product out of stock';
    }
    console.log(this.error)
  }
}
