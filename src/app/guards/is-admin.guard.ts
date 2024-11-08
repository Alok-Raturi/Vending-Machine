import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot } from '@angular/router';
import { Router } from 'express';
import { AuthService } from '../services/auth.service';

export const isAdmin : CanActivateFn = (route:ActivatedRouteSnapshot, state: RouterStateSnapshot)=>{
  const router = inject(Router);
  const authService = inject(AuthService)
  if(authService.roleValue){
    return true;
  }
  router.navigate(['/home'])
  return false;
}
