import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiveAplozComponent } from './give-aploz.component';

describe('GiveAplozComponent', () => {
  let component: GiveAplozComponent;
  let fixture: ComponentFixture<GiveAplozComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiveAplozComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiveAplozComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
