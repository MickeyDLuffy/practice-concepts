import { Component, OnInit } from '@angular/core';
import {BehaviorSubject, interval, Subject} from 'rxjs';
import {timeout} from 'rxjs/operators';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  schoolTaskColumns: string[] = [''];
  emptyContentMessageContent = 's';
  emptyContentMessageHeader = 'sd';
  subject = new BehaviorSubject(true);
  datasource = {loading: this.subject, length: 1 };
  constructor() { }

  ngOnInit(): void {
     const seconds = interval(1000);
     seconds
       .pipe(timeout(20000))
       .subscribe(second => {
          this.subject.next(false);
     });
  }

  createNewTask() {

  }
}
