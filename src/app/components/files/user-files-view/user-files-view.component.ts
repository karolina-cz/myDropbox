import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { AuthService } from '../../../shared/services/user-auth.service';
import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';
import { FilesManagerService } from '../../../shared/services/files-manager.service';
@Component({
  selector: 'app-user-files-view',
  templateUrl: './user-files-view.component.html',
  styleUrls: ['./user-files-view.component.css']
})
export class UserFilesViewComponent implements OnInit {
  selectedFile = null;
  faFile = faFile;
  task: AngularFireUploadTask;
  snapshot: Observable<any>;
  downloadURLs = {};
  downloadURL = null;
  downloadURL2 = null;
  userUid = null;
  items: Observable<any[]>;
  url = null;
  fileList = [];
  authSubscription: any;

  constructor(private storage: AngularFireStorage,
    private filesManagerService: FilesManagerService, private authService: AuthService,
    private changeDetection: ChangeDetectorRef) {
    this.userUid = this.authService.getUserUid()
    const ref = this.storage.ref('undefined/isInverted.m');
    this.downloadURL = ref.getDownloadURL()
    this.items = filesManagerService.itemsRef
    this.filesManagerService.getFilesData().then(res => {
      this.fileList = res
      this.downloadURLs = this.filesManagerService.createDownloadURLsForAllFiles();
      this.changeDetection.detectChanges();
    });
  }

  ngOnInit(): void {
    // this.authSubscription = this.authService.AuthCreateFileListEmitted
    //   .subscribe(value => {
    //     if (value === true) {
    //       console.log("Authorization successfull event emitted")
    //       this.filesManagerService.getFilesData().then(res => {
    //         this.fileList = res
    //         this.downloadURLs = this.filesManagerService.createDownloadURLsForAllFiles();
    //         this.changeDetection.detectChanges();
    //       });
          
    //     }
    //   });

  }
  // testFileList(){
  //   console.log(this.fileList)
  // }

  onFileSelected(event) {
    this.selectedFile = event.target.files[0];
  }
  onUpload() {
    this.filesManagerService.fileUpload(this.selectedFile)

  }

//   async showURLList(){
//     await this.filesManagerService.getFilesData().then(res => this.downloadURLs = res);
//     console.log(this.downloadURL)

// }

testIfDownloadURLsIsCreatedProperly(){
  console.log(this.fileList)
  console.log(this.downloadURLs)
}

}
