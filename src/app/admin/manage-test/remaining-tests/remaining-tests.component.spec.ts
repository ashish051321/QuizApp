import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemainingTestsComponent } from './remaining-tests.component';

describe('RemainingTestsComponent', () => {
  let component: RemainingTestsComponent;
  let fixture: ComponentFixture<RemainingTestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemainingTestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemainingTestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
