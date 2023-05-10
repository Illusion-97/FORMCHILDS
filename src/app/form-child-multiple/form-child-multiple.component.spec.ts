import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormChildMultipleComponent } from './form-child-multiple.component';

describe('FormChildMultipleComponent', () => {
  let component: FormChildMultipleComponent;
  let fixture: ComponentFixture<FormChildMultipleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormChildMultipleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormChildMultipleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
