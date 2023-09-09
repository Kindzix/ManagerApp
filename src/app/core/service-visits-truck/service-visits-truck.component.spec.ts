import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceVisitsTruckComponent } from './service-visits-truck.component';

describe('ServiceVisitsTruckComponent', () => {
  let component: ServiceVisitsTruckComponent;
  let fixture: ComponentFixture<ServiceVisitsTruckComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServiceVisitsTruckComponent]
    });
    fixture = TestBed.createComponent(ServiceVisitsTruckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
