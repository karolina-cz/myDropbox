import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../shared/services/user-auth.service'
import {Router} from '@angular/router'
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userUid: any;
  constructor(public authService: AuthService, private router: Router) { 
    this.userUid = authService.getUserUid();
  }

  ngOnInit(): void {
  }
  getUserUid(){
    this.authService.getUserUid();
  }

  OnComponentReload(){
    this.userUid = 'hehe'
    location.reload()
  }

}
