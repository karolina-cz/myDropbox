import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../shared/services/user-auth.service'
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  constructor(
    public authService: AuthService
  ) { }

  
  
  ngOnInit(): void {
  }

  forgotPassword(){
    this.authService.ForgotPasswordClickedEmitter.next (true);
    console.log("password clicked");
  }

  test(email, password){
    console.log(email,password);
  }

}
