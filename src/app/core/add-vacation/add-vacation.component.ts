import { Component, OnInit } from '@angular/core';
import { VacationService } from '../../services/vacation.service';
import { EmployeeService } from '../../services/employee.service';
import { Vacation } from '../../interfaces/vacation';
import { Employee } from '../../interfaces/employee';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-vacation',
  templateUrl: './add-vacation.component.html',
  styleUrls: ['./add-vacation.component.css']
})
export class AddVacationComponent implements OnInit {
  startDate: string = '';
  endDate: string = '';
  employees: Employee[] = [];
  selectedEmployee: Employee | null = null;

  constructor(
    private vacationService: VacationService,
    private employeeService: EmployeeService,
    private router: Router
  ) {}

  vacationData = {
    startDate: '',
    endDate: '',
    employee: null as Employee | null,
  }
  ngOnInit() {
    this.loadEmployees();
  }

  loadEmployees() {
    this.employeeService.employees.subscribe(
      (data) => {
        this.employees = data;
      },
      (error) => {
        console.error('Błąd podczas pobierania danych o pracownikach:', error);
      }
    );
  }


  onSubmit() {
    this.employeeService.getEmployeeById(this.selectedEmployee).subscribe(
      (data) => {
        this.vacationData.employee = data;

        this.vacationService.createVacation(this.vacationData).subscribe(
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

  addVacation(){
    this.onSubmit();
    this.router.navigate(['/vacations']);
  }
  goBack() {
    this.router.navigate(['/vacations']);
  }
}
