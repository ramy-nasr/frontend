export class Repo {
    name: string;
    description: string;
    open_issues_count: number;
    stargazers_count: number;
    pushed_at: string;
    owner:{
        avatar_url: string;
        login: string;
    }
}
