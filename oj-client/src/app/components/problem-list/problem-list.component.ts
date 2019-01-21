import {Component, OnDestroy, OnInit} from '@angular/core';
import { Problem } from "../../models/problem.model";
import { DataService } from "../../services/data.service";
import { Subscription } from 'rxjs';



@Component({
  // select
  selector: 'app-problem-list',
  templateUrl: './problem-list.component.html',
  styleUrls: ['./problem-list.component.css']
})

// below is actually the code of ProblemListComponent Class
// export means it can be accesseed by ?
export class ProblemListComponent implements OnInit, OnDestroy {
  problems: Problem[];
  subscriptionProblems: Subscription;

  constructor(private dataService: DataService) {
  }


  ngOnInit() {
    this.getProblems();
  }
  ngOnDestroy() {
    this.subscriptionProblems.unsubscribe();
  }
  getProblems() {
    this.subscriptionProblems = this.dataService.getProblems()
      .subscribe(problems => this.problems = problems);
  }
}
