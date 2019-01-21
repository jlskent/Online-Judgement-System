import { Component, OnInit } from '@angular/core';
import { Problem } from '../../models/problem.model';
import { DataService} from "../../services/data.service";


// here we use a template which can not be changed
const DEFAULT_PROBLEM: Problem = Object.freeze({
  id: 0,
  name: '',
  desc: '',
  difficulty: 'easy'
});

@Component({
  selector: 'app-new-problem',
  templateUrl: './new-problem.component.html',
  styleUrls: ['./new-problem.component.css']
})
export class NewProblemComponent implements OnInit {
  // looks like we dont have to initialize in constructor since our constructor is occupied by service = =
  // now we assign the DEFAULT_PROBLEM object to var

  // variables
  newProblem: Problem = Object.assign({}, DEFAULT_PROBLEM);
  difficulties: string[] = ['easy', 'medium', 'hard', 'super'];

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  addProblem() {
    this.dataService.addProblem(this.newProblem);
    // reset so that we have an empty template
    this.newProblem = Object.assign({}, DEFAULT_PROBLEM);
  }

}
