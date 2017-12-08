import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NiceTestComponent } from './nice-test.component';

describe('NiceTestComponent', () => {
  let component: NiceTestComponent;
  let fixture: ComponentFixture<NiceTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NiceTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NiceTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
