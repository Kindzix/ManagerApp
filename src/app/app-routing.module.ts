import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarComponent } from "./core/car/car.component";
import { VacationComponent } from "./core/vacation/vacation.component";
import {HomeComponent} from "./core/home/home.component";
import {EmployeesComponent} from "./core/employees/employees.component";
import {AddVacationComponent} from "./core/add-vacation/add-vacation.component";
import {AddServiceComponent} from "./core/add-service/add-service.component";
import {ServiceVisitsComponent} from "./core/service-visits/service-visits.component";
import {ServiceVisitsTruckComponent} from "./core/service-visits-truck/service-visits-truck.component";
import {AddServiceTruckComponent} from "./core/add-service-truck/add-service-truck.component";

const routes: Routes = [
  { path: '', component: EmployeesComponent },
  { path: 'employees', component: EmployeesComponent },
  { path: 'car', component: CarComponent },
  { path: 'service-visits/:id', component: ServiceVisitsComponent },
  { path: 'service-visits-truck/:id', component: ServiceVisitsTruckComponent },
  { path: 'vacation', component: VacationComponent },
  { path: 'dodaj-urlop', component: AddVacationComponent},
  { path: 'dodaj-wizyte/:id', component: AddServiceComponent},
  { path: 'dodaj-wizyte-truck/:id', component: AddServiceTruckComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
