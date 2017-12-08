import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SomeColaComponent } from './some-cola.component';

describe('SomeColaComponent', () => {
  let component: SomeColaComponent;
  let fixture: ComponentFixture<SomeColaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SomeColaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SomeColaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
