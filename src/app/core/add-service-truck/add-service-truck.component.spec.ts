import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddServiceTruckComponent } from './add-service-truck.component';

describe('AddServiceTruckComponent', () => {
  let component: AddServiceTruckComponent;
  let fixture: ComponentFixture<AddServiceTruckComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddServiceTruckComponent]
    });
    fixture = TestBed.createComponent(AddServiceTruckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
