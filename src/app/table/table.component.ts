import { Component, OnInit } from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  schoolTaskColumns: string[] = [''];
  emptyContentMessageContent = 's';
  emptyContentMessageHeader = 'sd';
  datasource = {loading: false, length: 1 };
  constructor() { }

  ngOnInit(): void {
  }

  createNewTask() {

  }
}
