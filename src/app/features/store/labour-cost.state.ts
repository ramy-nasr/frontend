import { LabourCost } from 'src/app/shared/labour-cost';

export interface LabourCostState {
    Loading: boolean;
    Loaded: boolean;
    LabourCostList: LabourCost[];
}

export const initializeState = (): LabourCostState => {
    return ({
        LabourCostList: [],
        Loading: false,
        Loaded: true
    });
}