import { LabourCost } from "../../shared/labour-cost";
import { LabourCostState, initializeState } from "./labour-cost.state";
import ActionWithPayload, * as LabourCostActions from "./Labour-cost.actions";
import { Action } from "@ngrx/store";

const initialState = initializeState();

export function LabourCostReducer(state: LabourCostState = initialState,
    action: Action) {

    switch (action.type) {
        case LabourCostActions.GET_LABOUR_COST:
            return { ...state, Loaded: false, Loading: false };

        case LabourCostActions.GET_LABOUR_COST_SUCCESS:
            return ({
                ...state,
                LabourCostList: state.LabourCostList.concat((action as ActionWithPayload<LabourCost[]>).payload),
                Loading: false, Loaded: true
            });

        case LabourCostActions.GET_LABOUR_COST_ERROR:
            return ({
                ...state,
                Loading: false, Loaded: false,
            });

        default:
            return state;
    }
}