import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { of, Observable } from 'rxjs';
import { catchError, map, mergeMap} from 'rxjs/operators';
import {
    GET_LABOUR_COST,
    GET_LABOUR_COST_ERROR,
    GetLabourCost,
    GetabourCostSuccess,
    LabourCostError
} from './Labour-cost.actions';
import { environment } from 'src/environments/environment';
import { LabourCost } from 'src/app/shared/labour-cost';

@Injectable()
export class LabourCostEffects {
    constructor(private http: HttpClient, private action$: Actions) { }
    private ApiURL: string = environment.baseUrl;

    @Effect()
    GetToDos$: Observable<Action> = this.action$.pipe(
        ofType<GetLabourCost>(GET_LABOUR_COST),
        mergeMap(action =>
            this.http.get(this.ApiURL).pipe(
                map(data => {
                    console.log('Effects Http call: ', data);
                    return new GetabourCostSuccess(data as LabourCost[]);
                }),
                catchError(error => {
                    console.error('Http Call Error: ', error);
                    return of(new LabourCostError(GET_LABOUR_COST_ERROR, error.message));
                })
            )
        )
    );
}