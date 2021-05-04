import { Repo } from 'src/app/shared/repos-model';

export interface RepoState {
    Loading: boolean;
    Loaded: boolean;
    Repos: Repo[];
}

export const initializeState = (): RepoState => {
    return ({
        Repos: [],
        Loading: false,
        Loaded: true
    });
}