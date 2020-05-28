import { Injectable } from '@angular/core';
import {AngularFireStorage, AngularFireUploadTask} from '@angular/fire/storage';
import{AuthService} from '../services/user-auth.service'
import{AngularFireDatabase} from '@angular/fire/database'
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FilesManagerService {
  public items: Observable<any[]>;
  public itemsRef = null;
  userUid = null;
  task: AngularFireUploadTask;
  fileList = [];
  downloadURLs = {};
  UploadFileClickedEmitter: BehaviorSubject<boolean> = new BehaviorSubject(false);
  constructor(private storage: AngularFireStorage, private authService: AuthService, private db: AngularFireDatabase) { 
   
      this.userUid = this.authService.getUserUid()
      this.items = db.list('items').valueChanges();
      this.itemsRef = db.list(`files/${this.userUid}`);
  }

  fileUpload(file){
    const path = `${this.userUid}/${file.name}`;

    // Reference to storage bucket
    const ref = this.storage.ref(path);

    // The main task
    this.task = this.storage.upload(path, file);
    //this.itemsRef.push({ name: file.name });
    this.UploadFileClickedEmitter.next(true);
  }


  async getFilesData(){
    this.fileList = [];
    this.userUid = this.authService.getUserUid()
    this.items = this.db.list('items').valueChanges();
    this.itemsRef = this.db.list(`files/${this.userUid}`);
    const listRef = this.storage.storage.ref().child(`${this.userUid}`);
    await listRef.listAll().then((res) => {
      res.items.forEach((itemRef) => {
        this.fileList.push(itemRef.name.toString())
      });
    }).catch(function(error) {
    });
     return this.fileList;

  }

  createDownloadURLsForAllFiles() {
    this.downloadURLs = {};
    this.fileList.forEach(el => {
      this.downloadURLs[el] = this.storage.ref(`${this.userUid}/${el}`).getDownloadURL()
    })
    return this.downloadURLs;
  }


}
