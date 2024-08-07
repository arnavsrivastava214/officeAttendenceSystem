import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportPageRoutingModule } from './report-page-routing.module';
import { ReportPageComponent } from './report-page.component';
import { HeaderModule } from "../header/header.module";


@NgModule({
  declarations: [ReportPageComponent],
  imports: [
    CommonModule,
    ReportPageRoutingModule,
    CommonModule,
    HeaderModule
],
  exports:[
    ReportPageComponent
  ]
})
export class ReportPageModule { }
