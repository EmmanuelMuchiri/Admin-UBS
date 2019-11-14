import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RevenueStreamsComponent } from './revenue-streams.component';

describe('RevenueStreamsComponent', () => {
  let component: RevenueStreamsComponent;
  let fixture: ComponentFixture<RevenueStreamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RevenueStreamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RevenueStreamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
