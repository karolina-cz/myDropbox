import { Component, OnInit } from '@angular/core';
import { faFileUpload, faFolderOpen, faFolderPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-file-management-sidebar',
  templateUrl: './file-management-sidebar.component.html',
  styleUrls: ['./file-management-sidebar.component.css']
})
export class FileManagementSidebarComponent implements OnInit {
  faFileUpload = faFileUpload;
  faFolderOpen = faFolderOpen;
  faFolderPlus = faFolderPlus;
  constructor() { }

  ngOnInit(): void {
  }

}
