import { Component, OnInit } from '@angular/core';
import { faFileUpload, faFolderOpen, faFolderPlus } from '@fortawesome/free-solid-svg-icons';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {FilesManagerService} from '../../../../shared/services/files-manager.service'
import { fromEventPattern } from 'rxjs';
import{UploadFileComponent} from "../../upload-file/upload-file.component"
@Component({
  selector: 'app-file-management-sidebar',
  templateUrl: './file-management-sidebar.component.html',
  styleUrls: ['./file-management-sidebar.component.css']
})
export class FileManagementSidebarComponent implements OnInit {
  faFileUpload = faFileUpload;
  faFolderOpen = faFolderOpen;
  faFolderPlus = faFolderPlus;
  subscription:any;
  constructor(private dialog: MatDialog, private filesManagerService: FilesManagerService ) { }

  ngOnInit(): void {
    this.subscription = this.filesManagerService.UploadFileClickedEmitter
    .subscribe(value => {
      if (value === true) {
          this.closeAllDialogs() 
          //location.reload()
          // should put focus() on input 
      }
  });
  }

  onFileUploadClicked(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.height = "190px";
    dialogConfig.width = "280px";
    this.dialog.open(UploadFileComponent, dialogConfig);
  }

  closeAllDialogs(){
    this.dialog.closeAll();
  }

}
