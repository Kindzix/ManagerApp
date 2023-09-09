// vacation.ts
import {Employee} from "./employee";

export interface Vacation {
  id: number;
  startDate: string;
  endDate: string;
  employee: Employee;
}
