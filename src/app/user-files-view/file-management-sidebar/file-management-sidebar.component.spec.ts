import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileManagementSidebarComponent } from './file-management-sidebar.component';

describe('FileManagementSidebarComponent', () => {
  let component: FileManagementSidebarComponent;
  let fixture: ComponentFixture<FileManagementSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileManagementSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileManagementSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
