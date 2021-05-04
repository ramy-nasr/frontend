import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { of, Observable } from 'rxjs';
import { catchError, map, mergeMap} from 'rxjs/operators';
import {
    GET_LABOUR_COST,
    GET_LABOUR_COST_ERROR,
    GetRepos,
    GetReposSuccess,
    ReposError
} from './repos.actions';
import { environment } from 'src/environments/environment';

@Injectable()
export class ReposEffects {
    constructor(private http: HttpClient, private action$: Actions) { }
    private ApiURL: string = environment.baseUrl;

    @Effect()
    GetRepos$: Observable<Action> = this.action$.pipe(
        ofType<GetRepos>(GET_LABOUR_COST),
        mergeMap(action =>
            this.http.get(`${this.ApiURL}&page=${action.pageNumber}`).pipe(
                map(data => new GetReposSuccess(data)),
                catchError(error => {
                    return of(new ReposError(GET_LABOUR_COST_ERROR, error.message));
                })
            )
        )
    );
}