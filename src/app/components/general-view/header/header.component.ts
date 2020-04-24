import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {SignUpComponent} from '../../user/sign-up/sign-up.component';
import { SignInComponent } from '../../user/sign-in/sign-in.component';
import{AuthService} from '../../../services/user-auth.service';
import { ForgotPasswordComponent } from '../../user/forgot-password/forgot-password.component';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private dialog: MatDialog, public authService: AuthService) { }
  subscription: any;
  authSubscription: any;
  ngOnInit(): void {
    this.subscription = this.authService.ForgotPasswordClickedEmitter
      .subscribe(value => {
        if (value === true) {
            console.log("!");
            this.ForgotPasswordClicked() 
            // should put focus() on input 
        }
    });

    this.authSubscription = this.authService.AuthSuccessEmitted
      .subscribe(value => {
        if (value === true) {
          this.closeAllDialogs() 
            // should put focus() on input 
        }
    });

  
  }

  closeAllDialogs(){
    this.dialog.closeAll();
  }

  ForgotPasswordClicked(){
    this.dialog.closeAll();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.height = "43%";
    dialogConfig.width = "40%";
    this.dialog.open(ForgotPasswordComponent, dialogConfig);
  }
  onCreateSignUp(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.height = "63%";
    dialogConfig.width = "40%";
    this.dialog.open(SignUpComponent, dialogConfig);
  }

  onCreateLogin(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.height = "79%";
    dialogConfig.width = "40%";
    this.dialog.open(SignInComponent, dialogConfig);
  }

}
