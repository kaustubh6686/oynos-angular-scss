import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AplozDetailsComponent } from './aploz-details.component';

describe('AplozDetailsComponent', () => {
  let component: AplozDetailsComponent;
  let fixture: ComponentFixture<AplozDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AplozDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AplozDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
