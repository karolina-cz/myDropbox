import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {SignUpComponent} from '../../user/sign-up/sign-up.component';
import { SignInComponent } from '../../user/sign-in/sign-in.component';
import{AuthService} from '../../../shared/services/user-auth.service';
import { ForgotPasswordComponent } from '../../user/forgot-password/forgot-password.component';

@Component({
  selector: 'app-sidebar-material',
  templateUrl: './sidebar-material.component.html',
  styleUrls: ['./sidebar-material.component.css']
})
export class SidebarMaterialComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, 
    private dialog: MatDialog, public authService: AuthService) {}

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
    dialogConfig.height = "320px";
    dialogConfig.width = "300px";
    this.dialog.open(ForgotPasswordComponent, dialogConfig);
  }
  onCreateSignUp(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.height = "360px";
    dialogConfig.width = "300px";
    this.dialog.open(SignUpComponent, dialogConfig);
  }

  onCreateLogin(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.height = "460px";
    dialogConfig.width = "360px";
    this.dialog.open(SignInComponent, dialogConfig);
  }

}
