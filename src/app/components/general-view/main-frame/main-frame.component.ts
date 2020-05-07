import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import {AuthService} from '../../../shared/services/user-auth.service'
@Component({
  selector: 'app-main-frame',
  templateUrl: './main-frame.component.html',
  styleUrls: ['./main-frame.component.css']
})
export class MainFrameComponent implements OnInit {
  constructor(public authService: AuthService, private changeDetection: ChangeDetectorRef) {
  }

  ngOnInit(): void {
  }


}
