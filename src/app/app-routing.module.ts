import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MarkingComponent } from './marking/marking.component';
import { LoginComponent } from './login/login.component';
import { loginGuard } from './shared/guards/login.guard';
import { AddUserComponent } from './user/forms/add-user/add-user.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: ''
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'marking',
    component: MarkingComponent,
    canActivate: [loginGuard]
  },
  {
    path: 'user',
    component: AddUserComponent,
    canActivate: [loginGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
