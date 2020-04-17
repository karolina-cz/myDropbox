import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {SignUpComponent} from '../../user/sign-up/sign-up.component';
import { SignInComponent } from '../../user/sign-in/sign-in.component';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
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
    dialogConfig.height = "76%";
    dialogConfig.width = "40%";
    this.dialog.open(SignInComponent, dialogConfig);
  }

}
