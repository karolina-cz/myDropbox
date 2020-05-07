import { Component, OnInit } from '@angular/core';
import { FilesManagerService } from '../../../shared/services/files-manager.service';
@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent implements OnInit {
  selectedFile = null;
  subscription: any;
  constructor(private filesManagerService: FilesManagerService) { }

  ngOnInit(): void {
  }

 

  onFileSelected(event) {
    this.selectedFile = event.target.files[0];
  }
  onUpload() {
    this.filesManagerService.fileUpload(this.selectedFile)

  }

}
