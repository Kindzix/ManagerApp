import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceVisitsComponent } from './service-visits.component';

describe('ServiceVisitsComponent', () => {
  let component: ServiceVisitsComponent;
  let fixture: ComponentFixture<ServiceVisitsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServiceVisitsComponent]
    });
    fixture = TestBed.createComponent(ServiceVisitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
