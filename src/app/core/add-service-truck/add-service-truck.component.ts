import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {VisitServiceService} from "../../services/visit-service.service";
import {HttpClient} from "@angular/common/http";

import {TruckService} from "../../services/truck.service";
import {Truck} from "../../interfaces/truck";

@Component({
  selector: 'app-add-service-truck',
  templateUrl: './add-service-truck.component.html',
  styleUrls: ['./add-service-truck.component.css']
})
export class AddServiceTruckComponent {
  id: string | null = this.route.snapshot.paramMap.get('id');

  visitServiceData = {
    startDate: '',
    endDate: '',
    description: '',
    truck: null as Truck | null,
    trailer: null,
  };

  constructor(
    private route: ActivatedRoute,
    private visitServiceService: VisitServiceService,
    private http: HttpClient,
    private truckService: TruckService,
    private router: Router
  ) {}

  onSubmit() {
    this.truckService.getTruckById(this.id).subscribe(
      (truck) => {
        this.visitServiceData.truck = truck;

        this.visitServiceService.createVisitService(this.visitServiceData).subscribe(
          (response) => {
            console.log('Dodano wizytę:', response);
          },
          (error) => {
            console.error('Błąd podczas dodawania wizyty:', error);
          }
        );
      },
      (error) => {
        console.error('Błąd podczas pobierania obiektu truck:', error);
      }
    );
  }

  addVisit() {
    this.onSubmit();
    this.router.navigate(['/service-visits-truck', this.id]);
  }

  goBack() {
    this.router.navigate(['/service-visits-truck', this.id]);
  }
}
