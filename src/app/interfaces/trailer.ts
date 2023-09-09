// trailer.ts
import {Employee} from "./employee";

export interface Trailer {
  id: number;
  registration: string;
  review: string;
  employee: Employee;
  identifier: string;
}
