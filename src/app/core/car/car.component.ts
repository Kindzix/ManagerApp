import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TrailerService } from '../../services/trailer.service';
import { TruckService } from '../../services/truck.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent {
  displayedColumns: string[] = ['registrationNumber', 'inspectionDate', 'actions'];
  showingTrailers: boolean = false;
  showingTrucks: boolean = false;
  trailers: any[] = [];
  trucks: any[] = [];
  selectedDate: string | null = null;
  dataSource: any[] = [];

  constructor(
    private trailerService: TrailerService,
    private truckService: TruckService,
    private router: Router
  ) {}

  ngOnInit() {
    this.showTrailers();
  }

  showTrailers() {
    this.showingTrailers = true;
    this.showingTrucks = false;
    this.trailerService.getAllTrailers().subscribe(data => {
      this.trailers = data.map(trailer => ({ ...trailer, isEditing: false }));
      this.trailers.sort((a, b) => new Date(a.review).getTime() - new Date(b.review).getTime());
    });
  }

  showTrucks() {
    this.showingTrucks = true;
    this.showingTrailers = false;
    this.truckService.getAllTrucks().subscribe(data => {
      this.trucks = data.map(truck => ({ ...truck, isEditing: false }));
      this.trucks.sort((a, b) => new Date(a.review).getTime() - new Date(b.review).getTime());
    });
  }

  editTrailer(trailer: any) {
    trailer.isEditing = true;
  }

  editTruck(truck: any) {
    truck.isEditing = true;
  }

  updateTrailer(trailer: any) {
    if (this.selectedDate) {
      const selectedDate = new Date(this.selectedDate);
      selectedDate.setDate(selectedDate.getDate() + 1);
      trailer.review = selectedDate.toISOString().split('T')[0];
      this.trailerService.updateTrailer(trailer.id, trailer).subscribe(updatedTrailer => {
        trailer.isEditing = false;
        location.reload();
      });
    }
  }

  updateTruck(truck: any) {
    if (this.selectedDate) {
      const selectedDate = new Date(this.selectedDate);
      selectedDate.setDate(selectedDate.getDate() + 1);
      truck.review = selectedDate.toISOString().split('T')[0];
      this.truckService.updateTruck(truck.id, truck).subscribe(updatedTruck => {
        truck.isEditing = false;
        location.reload();
      });
    }
  }

  cancelEdit(element: any) {
    element.isEditing = false;
    this.selectedDate = null;
  }

  navigateToDetailsPage(trailerOrTruck: any) {
    const id = trailerOrTruck.truck ? trailerOrTruck.truck.id : trailerOrTruck.id;
    const identifier = trailerOrTruck.truck ? trailerOrTruck.truck.identifier : trailerOrTruck.identifier;

    console.log('trailerOrTruck:', identifier);

    if (identifier !== undefined && identifier !== null) {
      this.router.navigate(['/service-visits', id]);
    } else {
      this.router.navigate(['/service-visits-truck', id]);
    }
  }

}
