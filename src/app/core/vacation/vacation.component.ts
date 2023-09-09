import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Vacation } from '../../interfaces/vacation';
import { VacationService } from '../../services/vacation.service';
import {EmployeeDialogComponent} from "../employee-dialog/employee-dialog.component"; // Importujemy serwis VacationService

@Component({
  selector: 'app-vacation',
  templateUrl: './vacation.component.html',
  styleUrls: ['./vacation.component.css']
})
export class VacationComponent implements OnInit {
  dataSource: Vacation[] = [];

  constructor(
    private vacationService: VacationService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.getAllVacations();
  }

  getAllVacations() {
    this.vacationService.getAllVacations().subscribe(
      (data) => {
        data.sort((a, b) => {
          const dateA = new Date(a.startDate);
          const dateB = new Date(b.startDate);
          return dateB.getTime() - dateA.getTime();
        });

        this.dataSource = data;
        console.log(data);
      },
      (error) => {
        console.error('Błąd podczas pobierania danych o urlopach:', error);
      }
    );
  }
  openEmployeeDialog(osoba: Vacation) {}
}
