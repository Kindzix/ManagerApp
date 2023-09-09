// truck.ts
import {Employee} from "./employee";

export interface Truck {
  id: number;
  registration: string;
  review: string;
  employee: Employee;
}
