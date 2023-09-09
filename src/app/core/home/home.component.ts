import {Component, OnInit} from '@angular/core';
import {VacationService} from "../../services/vacation.service";
import {Vacation} from "../../interfaces/vacation";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  vacations: Vacation[] = [];

  constructor(private vacationService: VacationService) { }

  ngOnInit() {
    this.getAllVacations();
  }

  getAllVacations() {
    this.vacationService.getAllVacations().subscribe(
      data => {
        this.vacations = data.slice(0, 5);
      },
      error => {
        console.error('Błąd podczas pobierania danych o urlopach:', error);
      }
    );
  }
}

