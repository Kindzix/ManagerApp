// visit-service.ts
import {Truck} from "./truck";
import {Trailer} from "./trailer";

export interface VisitService {
  id: number;
  startDate: string;
  endDate: string;
  description: string;
  trailer: Trailer;
  truck: Truck;
}
