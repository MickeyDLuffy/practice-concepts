import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TaskModel} from './model/task.model';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
   private assignmentUrl = `${environment.baseAPIUrl}/assignments`;
  constructor(private http: HttpClient) { }

  public getAssigments(): Observable<TaskModel[]> {
     return this.http.get<TaskModel[]>(this.assignmentUrl);
  }
}
