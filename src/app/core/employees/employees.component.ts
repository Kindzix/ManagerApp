import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmployeeDialogComponent } from '../employee-dialog/employee-dialog.component';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../interfaces/employee'; // Dodaj import

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  constructor(public dialog: MatDialog, private employeeService: EmployeeService) {}

  displayedColumns: string[] = ['position', 'firstName', 'lastName']; // Zmieniono kolumny na odpowiednie
  dataSource: Employee[] = [];

  ngOnInit() {
    this.getAllEmployees();
  }

  openEmployeeDialog(employee: Employee): void {
    const dialogRef = this.dialog.open(EmployeeDialogComponent, {
      width: '300px',
      data: employee
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  getAllEmployees() {
    this.employeeService.employees.subscribe(data => {
      this.dataSource = data;
    });
  }
}
