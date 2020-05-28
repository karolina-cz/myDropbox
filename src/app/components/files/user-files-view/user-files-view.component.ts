import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import { FilesManagerService } from '../../../shared/services/files-manager.service';
@Component({
  selector: 'app-user-files-view',
  templateUrl: './user-files-view.component.html',
  styleUrls: ['./user-files-view.component.css']
})
export class UserFilesViewComponent implements OnInit {
  selectedFile = null;
  faFile = faFile;
  downloadURLs = {};
  fileList = [];

  constructor(private filesManagerService: FilesManagerService,
    private changeDetection: ChangeDetectorRef) {
    this.filesManagerService.getFilesData().then(res => {
      this.fileList = res
      this.downloadURLs = this.filesManagerService.createDownloadURLsForAllFiles();
      //this.changeDetection.detectChanges();
    });
  }

  ngOnInit(): void {

  }


}
