
import { Action } from "@ngrx/store";
import { LabourCost } from 'src/app/shared/labour-cost';

export const GET_LABOUR_COST = '[LabourCost] GET_ALL';
export const GET_LABOUR_COST_SUCCESS = '[LabourCost] GET_ALL_SUCCESS';
export const GET_LABOUR_COST_ERROR = '[LabourCost] GET_ALL_ERROR';

export default interface ActionWithPayload<T> extends Action {
    payload: T;
}

export class GetLabourCost implements Action {
    readonly type = GET_LABOUR_COST;

    constructor() { }
}

export class GetabourCostSuccess implements ActionWithPayload<LabourCost[]> {
    readonly type = GET_LABOUR_COST_SUCCESS;
    payload: LabourCost[];

    constructor(payload: LabourCost[]) {
        this.payload = payload;
    }
}

export class LabourCostError implements Action {
    readonly type: string;
    readonly message: string;

    constructor(type: string, message: string) {
        this.message = message;
        this.type = type;
    }
}

export type All = GetLabourCost |
    GetabourCostSuccess |
    LabourCostError