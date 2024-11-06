import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { SpinnerComponent } from '../../shared/spinner/spinner.component';

@Component({
  selector: 'app-update-balance',
  standalone: true,
  imports: [FormsModule,SpinnerComponent],
  templateUrl: './update-balance.component.html',
  styleUrl: './update-balance.component.css'
})
export class UpdateBalanceComponent {
  constructor(private authService:AuthService,private router:Router){}

  amount='0'
  isloading =false

  onSubmit(){
    this.isloading=true
    this.authService.addAmount(this.amount).subscribe({
      next:()=>{
        this.isloading=false
        this.router.navigate(['/home'])
      }
    })
  }
}
