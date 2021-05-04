import { createSelector, createFeatureSelector, State, Store } from '@ngrx/store';
import { RepoState } from './repos.state';

export const reposStateKey = 'repos';

export const selectFeature = createFeatureSelector<RepoState>(reposStateKey);

export const selectFeatureRepos = createSelector(
    selectFeature,
    (state: RepoState) => state.Repos
);
