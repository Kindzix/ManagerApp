import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './core/home/home.component';
import { HeaderComponent } from './core/header/header.component';
import { EmployeesComponent } from './core/employees/employees.component';
import { CarComponent } from './core/car/car.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatCardModule} from "@angular/material/card";
import {MatListModule} from "@angular/material/list";
import {MatTabsModule} from "@angular/material/tabs";
import {MatInputModule} from "@angular/material/input";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import { EmployeeDialogComponent } from './core/employee-dialog/employee-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import {FormsModule} from "@angular/forms";
import { AddVacationComponent } from './core/add-vacation/add-vacation.component';
import {VacationComponent} from "./core/vacation/vacation.component";
import { AddServiceComponent } from './core/add-service/add-service.component';
import {HttpClientModule} from "@angular/common/http";
import {MatNativeDateModule} from "@angular/material/core";
import {ServiceVisitsComponent} from "./core/service-visits/service-visits.component";
import { ServiceVisitsTruckComponent } from './core/service-visits-truck/service-visits-truck.component';
import { AddServiceTruckComponent } from './core/add-service-truck/add-service-truck.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    VacationComponent,
    EmployeesComponent,
    CarComponent,
    ServiceVisitsComponent,
    EmployeeDialogComponent,
    AddVacationComponent,
    AddServiceComponent,
    ServiceVisitsTruckComponent,
    AddServiceTruckComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDatepickerModule,
    MatGridListModule,
    MatCardModule,
    MatListModule,
    MatTabsModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
