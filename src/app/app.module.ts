import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';
import { TaskTableComponent } from './task/task-table/task-table.component';
import { TableComponent } from './table/table.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { NoSearchResultComponent } from './general/no-search-result/no-search-result.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    TaskTableComponent,
    TableComponent,
    NoSearchResultComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MatPaginatorModule,
        BrowserAnimationsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
