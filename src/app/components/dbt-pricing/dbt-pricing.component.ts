import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Plan } from '../../models/plan';
import { AppRoutingModule } from '../../app-routing.module';
import { GlobalService } from '../../services/global.service';

@Component({
  selector: 'app-dbt-pricing',
  templateUrl: './dbt-pricing.component.html',
  styleUrls: ['./dbt-pricing.component.css']
})
export class DbtPricingComponent implements OnInit {
  
  public plans: Plan[];

  constructor(private router: Router, private globalService: GlobalService) {
        // this.plans = globalService.getAllPlans();

            // Confirm the exam was saved
    this.globalService.getAllPlans()
    .then(
      (plans) => {
        this.plans = plans;
      }
    );
  }

  ngOnInit() {
  }

  public buyPlan(pPlanNumber: number): void {
    console.log('The plan purchase selection is:');
    console.log(pPlanNumber);
    this.router.navigate(['/', 'buy', pPlanNumber]);
  }

}
