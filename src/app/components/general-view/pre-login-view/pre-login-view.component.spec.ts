import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreLoginViewComponent } from './pre-login-view.component';

describe('PreLoginViewComponent', () => {
  let component: PreLoginViewComponent;
  let fixture: ComponentFixture<PreLoginViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreLoginViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreLoginViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
