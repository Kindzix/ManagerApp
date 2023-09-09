import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from "@angular/common/http";
import { VisitServiceService } from "../../services/visit-service.service";
import { TrailerService } from "../../services/trailer.service";
import {Trailer} from "../../interfaces/trailer";
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.component.html',
  styleUrls: ['./add-service.component.css']
})
export class AddServiceComponent {
  id: string | null = this.route.snapshot.paramMap.get('id');

  visitServiceData = {
    startDate: '',
    endDate: '',
    description: '',
    trailer: null as Trailer | null,
    truck: null,
  };

  constructor(
    private route: ActivatedRoute,
    private visitServiceService: VisitServiceService,
    private http: HttpClient,
    private trailerService: TrailerService,
    private router: Router
  ) {}

  onSubmit() {
    this.trailerService.getTrailerById(this.id).subscribe(
      (trailer) => {
        this.visitServiceData.trailer = trailer;

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
        console.error('Błąd podczas pobierania obiektu Trailer:', error);
      }
    );
  }

  addVisit() {
    this.onSubmit();
    this.router.navigate(['/service-visits', this.id]);
  }

  goBack(){
    this.router.navigate(['/service-visits', this.id]);
  }
}
