import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
//import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { routingModule }  from './app.router';
import { AppRoutingModule } from './app.router';
import { EmpDataService } from './app.model';
import { HttpClientModule } from '@angular/common/http';
import { DataTableModule } from 'primeng/datatable';
import { PaginatorModule } from 'primeng/paginator';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { DropdownModule } from 'primeng/dropdown';

import { AppComponent } from './app.component';

const routes: Routes = [

];

@NgModule({
  declarations: [
    AppComponent,routingModule
  ],
  imports: [
    BrowserModule,ReactiveFormsModule,FormsModule,BrowserAnimationsModule,DropdownModule,
    AppRoutingModule,HttpClientModule,DataTableModule,PaginatorModule,ConfirmDialogModule,
    ConfirmDialogModule,RouterModule.forRoot(routes, { useHash: true })
  ],
  providers: [
  //   {
  //  provide: LocationStrategy,
  //  useClass: HashLocationStrategy
  // },
  EmpDataService,ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
