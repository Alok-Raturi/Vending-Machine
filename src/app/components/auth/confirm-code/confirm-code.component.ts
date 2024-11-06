import { AuthService } from './../../../services/auth.service';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { SpinnerComponent } from '../../shared/spinner/spinner.component';

@Component({
  selector: 'app-confirm-code',
  standalone: true,
  imports: [FormsModule,SpinnerComponent],
  templateUrl: './confirm-code.component.html',
  styleUrl: './confirm-code.component.css'
})
export class ConfirmCodeComponent {
  constructor(private authService:AuthService,private router:Router){}
  code = ''
  isloading = false

  OnSubmit(){
    this.isloading=true
      this.authService.confirm(this.code).subscribe((data)=>{
        this.isloading=false
        this.router.navigate(['/login'])
      })
  }
}
