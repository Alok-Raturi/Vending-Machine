import { AuthService } from './../../../services/auth.service';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirm-code',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './confirm-code.component.html',
  styleUrl: './confirm-code.component.css'
})
export class ConfirmCodeComponent {
  constructor(private authService:AuthService,private router:Router){}
  code = ''
  OnSubmit(){
    console.log(this.code)
      this.authService.confirm(this.code).subscribe((data)=>{
        this.router.navigate(['/login'])
      })
  }
}
