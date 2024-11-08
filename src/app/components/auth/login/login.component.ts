import { Component, DestroyRef, inject, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { Router, RouterLink } from '@angular/router';
import { SpinnerComponent } from '../../shared/spinner/spinner.component';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,RouterLink,SpinnerComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  email = '';
  password = '';
  errorMessage =''
  isloading = false
  // private router = inject(Router)
  // private destroyRef =inject(DestroyRef)
  constructor(private authService:AuthService,private router: Router,private destroyRef:DestroyRef){}

  onSubmit() {
    this.isloading =true
    let sub = this.authService.signin(this.email,this.password).subscribe({
      next:(data)=>{
        console.log(data)
        this.isloading=false
        this.router.navigate(['/home'])
      },
      error:(error)=>{
        if(error['status']===301){
          this.router.navigate(['not-verified'])
          return
        }
        this.errorMessage= error['error']
        this.isloading=false
      }
    })

    this.destroyRef.onDestroy(()=>sub.unsubscribe())
  }

}
