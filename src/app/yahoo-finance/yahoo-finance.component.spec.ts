import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YahooFinanceComponent } from './yahoo-finance.component';

describe('YahooFinanceComponent', () => {
  let component: YahooFinanceComponent;
  let fixture: ComponentFixture<YahooFinanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YahooFinanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YahooFinanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
