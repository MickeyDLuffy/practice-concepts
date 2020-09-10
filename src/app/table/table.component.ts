import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  schoolTaskColumns: string[] = [''];
  emptyContentMessageContent = 's';
  emptyContentMessageHeader = 'sd';
  datasource: any;
  constructor() { }

  ngOnInit(): void {
  }

  createNewTask() {

  }
}
