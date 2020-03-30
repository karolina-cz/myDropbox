import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainFrameComponent } from './main-frame/main-frame.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarElementComponent } from './sidebar/sidebar-element/sidebar-element.component';
import { HeaderComponent } from './header/header.component';
import { AccountViewComponent } from './account-view/account-view.component';
import { PreLoginViewComponent } from './pre-login-view/pre-login-view.component';
import { UserMainViewComponent } from './user-main-view/user-main-view.component';
import { UserFilesViewComponent } from './user-files-view/user-files-view.component';
import { FileManagementSidebarComponent } from './user-files-view/file-management-sidebar/file-management-sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    MainFrameComponent,
    SidebarComponent,
    SidebarElementComponent,
    HeaderComponent,
    AccountViewComponent,
    PreLoginViewComponent,
    UserMainViewComponent,
    UserFilesViewComponent,
    FileManagementSidebarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
