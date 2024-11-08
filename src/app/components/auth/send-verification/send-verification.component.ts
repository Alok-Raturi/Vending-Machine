import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { SpinnerComponent } from '../../shared/spinner/spinner.component';

@Component({
  selector: 'app-send-verification',
  standalone: true,
  imports: [SpinnerComponent],
  templateUrl: './send-verification.component.html',
  styleUrl: './send-verification.component.css'
})
export class SendVerificationComponent {
  errorMessage = ''
  isloading = false
  constructor(private authService: AuthService,private router:Router){}

  sendVerification(){
    this.isloading=true
    this.authService.sendVerificationCode().subscribe({
      next:(data)=>{
        this.router.navigate(['confirm'])
      },
      error:(error)=>{
        this.errorMessage= error
      },
      complete:()=>{
        this.isloading=false
      }
    })
  }
}
