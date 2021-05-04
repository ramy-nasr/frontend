
import { Action } from "@ngrx/store";
import { Repo } from 'src/app/shared/repos-model';

export const GET_LABOUR_COST = '[LabourCost] GET_ALL';
export const GET_LABOUR_COST_SUCCESS = '[LabourCost] GET_ALL_SUCCESS';
export const GET_LABOUR_COST_ERROR = '[LabourCost] GET_ALL_ERROR';

export default interface ActionWithPayload<T> extends Action {
    payload: T;
}

export class GetRepos implements Action {
    readonly type = GET_LABOUR_COST;
    readonly pageNumber?: Number;

    constructor(pageNumber?: number) {
        this.pageNumber = pageNumber;
     }
}

export class GetReposSuccess implements ActionWithPayload<Repo[]> {
    readonly type = GET_LABOUR_COST_SUCCESS;
    readonly payload: Repo[];

    constructor(payload) {
        if(payload){
            this.payload = payload.items;
        }
        
    }
}

export class ReposError implements Action {
    readonly type: string;
    readonly message: string;

    constructor(type: string, message: string) {
        this.message = message;
        this.type = type;
    }
}

export type All = GetRepos |
    GetReposSuccess |
    ReposError