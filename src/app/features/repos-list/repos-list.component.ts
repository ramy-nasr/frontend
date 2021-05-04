import { Component, OnInit} from '@angular/core';
import { Repo } from 'src/app/shared/repos-model';
import { Observable } from 'rxjs';
import { ReposService } from '../repos.service';

@Component({
  selector: 'app-repos-list',
  templateUrl: './repos-list.component.html',
  styleUrls: ['./repos-list.component.css']
})
export class ReposListComponent implements OnInit {

  reposList: Observable<Repo[]>;
  pageNumber: number = 1;

  constructor(private reposService: ReposService) {}

  ngOnInit(): void {
    this.reposService.dipatchReposGetAction(this.pageNumber);
    this.reposList = this.reposService.selectRepos();
  }

  onPaginate(): void {
    this.pageNumber += 1;
    this.reposService.dipatchReposGetAction(this.pageNumber);
  }
}