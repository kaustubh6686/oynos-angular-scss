import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AplozSocialListComponent } from './aploz-social-list.component';

describe('AplozSocialListComponent', () => {
  let component: AplozSocialListComponent;
  let fixture: ComponentFixture<AplozSocialListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AplozSocialListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AplozSocialListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
