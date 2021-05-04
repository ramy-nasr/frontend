import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { RepoState } from './store/repos.state';
import { GetRepos } from './store/repos.actions';
import { selectFeatureRepos } from './store/repos.selectors';

@Injectable()
export class ReposService {

    constructor(private store: Store<RepoState>) {}

    selectRepos() {
        return this.store.select(selectFeatureRepos);
    }

    dipatchReposGetAction(pageNumber: number) {
        this.store.dispatch(new GetRepos(pageNumber));
    }
}