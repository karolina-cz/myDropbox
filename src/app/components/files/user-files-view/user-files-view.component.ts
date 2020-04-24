import { Component, OnInit } from '@angular/core';
import { faFile} from '@fortawesome/free-solid-svg-icons';
import {File} from '../../../models/file';

@Component({
  selector: 'app-user-files-view',
  templateUrl: './user-files-view.component.html',
  styleUrls: ['./user-files-view.component.css']
})
export class UserFilesViewComponent implements OnInit {
  faFile = faFile;
  testFile: File = {
    body: 'testowa wiadomosc'
  }
  constructor() { }

  ngOnInit(): void {
  }

}
