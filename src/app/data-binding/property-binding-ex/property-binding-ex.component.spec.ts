import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyBindingExComponent } from './property-binding-ex.component';

describe('PropertyBindingExComponent', () => {
  let component: PropertyBindingExComponent;
  let fixture: ComponentFixture<PropertyBindingExComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertyBindingExComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyBindingExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
