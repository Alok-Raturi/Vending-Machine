import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-balance',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './update-balance.component.html',
  styleUrl: './update-balance.component.css'
})
export class UpdateBalanceComponent {
  constructor(private authService:AuthService,private router:Router){}

  amount='0'

  onSubmit(){
    this.authService.addAmount(this.amount).subscribe()
    this.router.navigate(['/home'])
  }
}
