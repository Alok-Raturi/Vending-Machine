import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-update-balance',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './update-balance.component.html',
  styleUrl: './update-balance.component.css'
})
export class UpdateBalanceComponent {
  constructor(private authService:AuthService){}

  amount='0'

  onSubmit(){
    console.log(this.amount)
    this.authService.addAmount(this.amount).subscribe(data=>console.log(data))
  }
}
