import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MainFrameComponent } from './components/general-view/main-frame/main-frame.component';
import { SidebarComponent } from './components/general-view/sidebar/sidebar.component';
import { HeaderComponent } from './components/general-view/header/header.component';
import { AccountViewComponent } from './components/user/account-view/account-view.component';
import { UserMainViewComponent } from './components/user/user-main-view/user-main-view.component';
import { UserFilesViewComponent } from './components/files/user-files-view/user-files-view.component';
import { FileManagementSidebarComponent } from './components/files/user-files-view/file-management-sidebar/file-management-sidebar.component';
import {AuthService} from './shared/services/user-auth.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import {Routes, RouterModule} from '@angular/router';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { SignInComponent } from './components/user/sign-in/sign-in.component';
import { SignUpComponent } from './components/user/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './components/user/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/user/verify-email/verify-email.component';
import { DashboardComponent } from './components/user/dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Angular Material Components
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTabsModule} from '@angular/material/tabs';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import { DropdownDirective } from './shared/directives/dropdown.directive';

//guards
import {AuthGuard} from './shared/guard/auth.guard';

const appRoutes: Routes = [
  { path:'files', component: UserFilesViewComponent },
  { path:'account', component: AccountViewComponent },
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'verify-email-address', component: VerifyEmailComponent },
  { path: 'main', component: MainFrameComponent}
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
    HeaderComponent,
    AccountViewComponent,
    UserMainViewComponent,
    UserFilesViewComponent,
    FileManagementSidebarComponent,
    SignInComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    DashboardComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule, 
    BrowserAnimationsModule, // storage,
    MatCheckboxModule,
    MatCheckboxModule,
    MatButtonModule,
    MatInputModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatStepperModule,
    MatTabsModule,
    MatExpansionModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatDialogModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule
  ],
  providers: [AuthService
  ],
  bootstrap: [AppComponent],
  entryComponents: 
  [SignUpComponent,
    SignInComponent
  ]
})
export class AppModule { }
