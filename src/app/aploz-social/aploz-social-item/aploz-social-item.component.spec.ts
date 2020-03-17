import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AplozSocialItemComponent } from './aploz-social-item.component';

describe('AplozSocialItemComponent', () => {
  let component: AplozSocialItemComponent;
  let fixture: ComponentFixture<AplozSocialItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AplozSocialItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AplozSocialItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
