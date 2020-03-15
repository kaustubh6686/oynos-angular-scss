import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyScoreComponentComponent } from './my-score-component.component';

describe('MyScoreComponentComponent', () => {
  let component: MyScoreComponentComponent;
  let fixture: ComponentFixture<MyScoreComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyScoreComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyScoreComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
