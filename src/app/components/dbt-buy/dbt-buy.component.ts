import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dbt-buy',
  templateUrl: './dbt-buy.component.html',
  styleUrls: ['./dbt-buy.component.css']
})
export class DbtBuyComponent implements OnInit {

  @Input() planId: number;

  public vPlanId: number;

  constructor(private router: Router,
    private route: ActivatedRoute) {

   }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.vPlanId = parseInt(params.get('plan_id'), 10);
    });

    console.log('The Plan ID is: ');
    console.log(this.vPlanId);
  }

}
