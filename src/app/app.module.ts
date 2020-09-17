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
import {ContentLoaderModule} from '@ngneat/content-loader';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatTooltipModule} from '@angular/material/tooltip';
import {TaskService} from './task/task.service';
import { HttpClientModule} from '@angular/common/http';
import { BoldTextDirective } from './directives/bold-text.directive';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    TaskTableComponent,
    TableComponent,
    NoSearchResultComponent,
    BoldTextDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
    ContentLoaderModule,
    HttpClientModule,
    MatTableModule,
    MatSortModule,
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
