import { Routes } from '@angular/router';
import { AvailableItemsComponent } from './components/user/available-items/available-items.component';
import { LoginComponent } from './components/auth/login/login.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { ConfirmCodeComponent } from './components/auth/confirm-code/confirm-code.component';
import { UpdateBalanceComponent } from './components/auth/update-balance/update-balance.component';

export const routes: Routes = [
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  },
  {
    path:'home',
    component: AvailableItemsComponent
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'signup',
    component:SignupComponent
  },
  {
    path:'confirm',
    component:ConfirmCodeComponent
  },
  {
    path:'add-balance',
    component: UpdateBalanceComponent
  }
];
