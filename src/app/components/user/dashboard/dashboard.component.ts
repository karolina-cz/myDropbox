import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../shared/services/user-auth.service'
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userUid: any;
  constructor(public authService: AuthService) { 
    authService.testGetUserUid().then((res)=>
    {   console.log(res)
        this.userUid = res;
    });
  }

  ngOnInit(): void {
  }
  getUserUid(){
    this.authService.getUserUid();
  }

}
