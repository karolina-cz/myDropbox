import { Component, OnInit } from '@angular/core';
import { faFile} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-user-files-view',
  templateUrl: './user-files-view.component.html',
  styleUrls: ['./user-files-view.component.css']
})
export class UserFilesViewComponent implements OnInit {
  faFile = faFile;
  constructor() { }

  ngOnInit(): void {
  }

}
