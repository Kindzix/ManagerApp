import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VisitServiceService } from '../../services/visit-service.service';
import { VisitService } from '../../interfaces/visit-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-service-visits',
  templateUrl: './service-visits.component.html',
  styleUrls: ['./service-visits.component.css']
})
export class ServiceVisitsComponent implements OnInit {
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
    let id: string | null = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.visitServiceService.getVisitServicesByTrailerId(id).subscribe((visits) => {
        visits.sort((a, b) => {
          const dateA = new Date(a.startDate);
          const dateB = new Date(b.startDate);
          return dateB.getTime() - dateA.getTime();
        });

        this.visits = visits;
      });
    } else {
    }
  }

  navigateToAddVisitPage() {
    let id: string | null = this.route.snapshot.paramMap.get('id');
    this.router.navigate(['/dodaj-wizyte', id]);
  }

  aaa() {
    this.router.navigate(['/car']);
  }
}
