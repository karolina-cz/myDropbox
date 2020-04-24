import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';

import { UserFilesViewComponent } from '../../../components/files/user-files-view/user-files-view.component';
import { AccountViewComponent } from '../../../components/user/account-view/account-view.component';
import { SignInComponent } from '../../../components/user/sign-in/sign-in.component';
import { SignUpComponent } from '../../../components/user/sign-up/sign-up.component';
import { ForgotPasswordComponent } from '../../../components/user/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from '../../../components/user/verify-email/verify-email.component';
import { DashboardComponent } from '../../../components/user/dashboard/dashboard.component';
import { MainFrameComponent } from '../../../components/general-view/main-frame/main-frame.component';

const appRoutes: Routes = [
  { path:'files', component: UserFilesViewComponent },
  { path:'account', component: AccountViewComponent },
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'sign-in', component: SignInComponent },
  { path: 'register-user', component: SignUpComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'verify-email-address', component: VerifyEmailComponent },
  { path: 'main', component: MainFrameComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }
