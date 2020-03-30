import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFilesViewComponent } from './user-files-view.component';

describe('UserFilesViewComponent', () => {
  let component: UserFilesViewComponent;
  let fixture: ComponentFixture<UserFilesViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserFilesViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFilesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
