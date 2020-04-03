import { Component, OnInit } from '@angular/core';
import { faFile} from '@fortawesome/free-solid-svg-icons';
import {FilesService} from '../../../services/files-service.service';
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
  constructor( public filesService: FilesService) { }

  ngOnInit(): void {
  }

}
