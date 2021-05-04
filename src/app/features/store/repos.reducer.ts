import { Repo } from "../../shared/repos-model";
import { RepoState, initializeState } from "./repos.state";
import ActionWithPayload, * as ReposActions from "./repos.actions";
import { Action } from "@ngrx/store";

const initialState = initializeState();

export function ReposReducer(state: RepoState = initialState,
    action: Action) {

    switch (action.type) {
        case ReposActions.GET_LABOUR_COST:
            return { ...state, Loaded: false, Loading: false };

        case ReposActions.GET_LABOUR_COST_SUCCESS:
            return ({
                ...state,
                Repos: [...state.Repos, ...(action as ActionWithPayload<Repo[]>).payload],
                Loading: false, Loaded: true
            });

        case ReposActions.GET_LABOUR_COST_ERROR:
            return ({
                ...state,
                Loading: false, Loaded: false,
            });

        default:
            return state;
    }
}