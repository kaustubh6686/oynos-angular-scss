import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendAplozComponent } from './send-aploz.component';

describe('SendAplozComponent', () => {
  let component: SendAplozComponent;
  let fixture: ComponentFixture<SendAplozComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendAplozComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendAplozComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
