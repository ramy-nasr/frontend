import { Component, OnInit, Input } from '@angular/core';
import { LabourCost } from 'src/app/shared/labour-cost';

@Component({
  selector: 'app-labour-cost-list',
  templateUrl: './labour-cost-list.component.html',
  styleUrls: ['./labour-cost-list.component.sass']
})
export class LabourCostListComponent implements OnInit {
  @Input() labourCostList: LabourCost[];
  
  constructor() { }

  ngOnInit(): void {
  }

}
