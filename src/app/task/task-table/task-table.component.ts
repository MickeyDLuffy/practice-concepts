import { Component, OnInit } from '@angular/core';
import {TaskService} from '../task.service';

@Component({
  selector: 'app-task-table',
  templateUrl: './task-table.component.html',
  styleUrls: ['./task-table.component.scss', '../../table/table.component.scss']
})
export class TaskTableComponent implements OnInit {
  datasource ;
  schoolTaskColumns: string[] = [ 'assignmentNumber', 'assignmentName'];
  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.datasource = this.taskService.getAssigments();
  }

  rowClicked(row: any) {

  }
}
