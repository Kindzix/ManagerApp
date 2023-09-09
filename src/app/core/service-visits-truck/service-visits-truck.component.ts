import { Component } from '@angular/core';
import {VisitService} from "../../interfaces/visit-service";
import {ActivatedRoute, Router} from "@angular/router";
import {VisitServiceService} from "../../services/visit-service.service";

@Component({
  selector: 'app-service-visits-truck',
  templateUrl: './service-visits-truck.component.html',
  styleUrls: ['./service-visits-truck.component.css']
})
export class ServiceVisitsTruckComponent {
  visits: VisitService[] | null = null;


  constructor(
    private route: ActivatedRoute,
    private visitServiceService: VisitServiceService,
    private router: Router

  ) {}

  ngOnInit() {
    this.loadVisit();
  }

  loadVisit() {
    let id:string | null = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.visitServiceService.getVisitServicesByTruckId(id).subscribe(visit => {
        this.visits = visit;
      });
    } else {
    }
  }

  navigateToAddVisitPage() {
    let id:string | null = this.route.snapshot.paramMap.get('id');
    this.router.navigate(['/dodaj-wizyte-truck', id]);
  }

  aaa() {
    this.router.navigate(['/car']);
  }
}
