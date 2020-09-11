import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-table',
  templateUrl: './task-table.component.html',
  styleUrls: ['./task-table.component.scss', '../../table/table.component.scss']
})
export class TaskTableComponent implements OnInit {
  datasource = [{assignmentNumber: 878, assignmentName: 'Impossible'}];
  schoolTaskColumns: string[] = [ 'assignmentNumber', 'assignmentName'];
  constructor() { }

  ngOnInit(): void {
  }

  rowClicked(row: any) {

  }
}
