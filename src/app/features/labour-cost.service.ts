import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { LabourCostState } from './store/labour-cost.state';
import { GetLabourCost } from './store/Labour-cost.actions';
import { selectFeatureLabourCost } from './store/labour-cost.selectors';

@Injectable()
export class LabourCostService {

    constructor(private store: Store<LabourCostState>) {

    }

    selectLabourCost() {
        return this.store.select(selectFeatureLabourCost);
    }

    dipatchLabourCostGetAction() {
        this.store.dispatch(new GetLabourCost());
    }
}