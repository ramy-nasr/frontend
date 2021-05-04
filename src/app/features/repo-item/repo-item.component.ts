import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-repo-item',
  templateUrl: './repo-item.component.html',
  styleUrls: ['./repo-item.component.css']
})
export class RepoItemComponent {

  @Input() name: string;
  @Input() description: string;
  @Input() issues: number;
  @Input() stars: number;
  @Input() pushedAt: string;
  @Input() submittedBy: string;
  @Input() avatar: string;
}
