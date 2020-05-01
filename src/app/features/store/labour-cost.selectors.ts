import { createSelector, createFeatureSelector, State, Store } from '@ngrx/store';
import { LabourCostState } from './labour-cost.state';

export const labourCostStateKey = 'labourCost';

export const selectFeature = createFeatureSelector<LabourCostState>(labourCostStateKey);

export const selectFeatureLabourCost = createSelector(
    selectFeature,
    (state: LabourCostState) => state.LabourCostList
);
