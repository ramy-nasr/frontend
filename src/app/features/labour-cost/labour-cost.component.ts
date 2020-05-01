import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LabourCostService } from '../labour-cost.service';
import { LabourCost } from 'src/app/shared/labour-cost';

@Component({
  selector: 'app-labour-cost',
  templateUrl: './labour-cost.component.html',
  styleUrls: ['./labour-cost.component.sass']
})
export class LabourCostComponent implements OnInit {

  labourCostList$: Observable<LabourCost[]>;

  constructor(private labourCostService: LabourCostService) {

  }

  ngOnInit(): void {
    //dipatch action for getting labour cost list 
    this.labourCostService.dipatchLabourCostGetAction();

    //select labour cost list
    this.labourCostList$ = this.labourCostService.selectLabourCost();
  }

}
