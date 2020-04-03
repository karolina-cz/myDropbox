import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';
import {AngularFireAuth} from '@angular/fire/auth'
import {File} from '../models/file';



@Injectable({
  providedIn: 'root'
})
export class FilesService {
  files: AngularFireList<File> = null;
  userId: string;

  constructor(private db: AngularFireDatabase, private afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe(user =>{
      if(user) this.userId = user.uid;
    })
   }

   getFilesList() : AngularFireList<File> {
     if(!this.userId) return;
     this.files = this.db.list(`files/${this.userId}`);
     return this.files
   }

    createFile(file: File){
      this.files = this.getFilesList()
      this.files.push(file);
    }

  
}
