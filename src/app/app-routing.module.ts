import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventComponent } from './event/event.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { SubscribersComponent } from './subscribers/subscribers.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
   },
  {
    path: 'login',
    component: LoginComponent
   },
  {
    path: 'register',
    component: RegisterComponent
   },
  {
    path: 'events',
    component: EventComponent,
    canActivate: [AuthGuard]
   },
  {
    path: 'subscribers',
    component: SubscribersComponent,
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
