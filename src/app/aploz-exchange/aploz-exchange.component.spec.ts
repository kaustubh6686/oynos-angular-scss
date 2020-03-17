import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AplozExchangeComponent } from './aploz-exchange.component';

describe('AplozExchangeComponent', () => {
  let component: AplozExchangeComponent;
  let fixture: ComponentFixture<AplozExchangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AplozExchangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AplozExchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
