import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainFrameComponent } from './main-frame/main-frame.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarElementComponent } from './sidebar/sidebar-element/sidebar-element.component';
import { HeaderComponent } from './header/header.component';
import { AccountViewComponent } from './account-view/account-view.component';
import { PreLoginViewComponent } from './pre-login-view/pre-login-view.component';
import { UserMainViewComponent } from './user-main-view/user-main-view.component';
import { UserFilesViewComponent } from './user-files-view/user-files-view.component';
import { FileManagementSidebarComponent } from './user-files-view/file-management-sidebar/file-management-sidebar.component';
import {AuthService} from './services/user-auth.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import {Routes, RouterModule} from '@angular/router';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const appRoutes: Routes = [
  { path:'files', component: UserFilesViewComponent },
  { path:'account', component: AccountViewComponent },
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  { path: 'sign-in', component: SignInComponent },
  { path: 'register-user', component: SignUpComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'verify-email-address', component: VerifyEmailComponent }
];
var firebaseConfig = {
  apiKey: "AIzaSyCvT1c0Ati0h5xavww9tIib8uWNrjnoQXk",
  authDomain: "my-dropbox-40876.firebaseapp.com",
  databaseURL: "https://my-dropbox-40876.firebaseio.com",
  projectId: "my-dropbox-40876",
  storageBucket: "my-dropbox-40876.appspot.com",
  messagingSenderId: "374811036277",
  appId: "1:374811036277:web:a44b4b2e43b7fa74ee463c",
  measurementId: "G-3ENTFDYY7Q"
};

@NgModule({
  declarations: [
    AppComponent,
    MainFrameComponent,
    SidebarComponent,
    SidebarElementComponent,
    HeaderComponent,
    AccountViewComponent,
    PreLoginViewComponent,
    UserMainViewComponent,
    UserFilesViewComponent,
    FileManagementSidebarComponent,
    SignInComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule // storage
  ],
  providers: [AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
