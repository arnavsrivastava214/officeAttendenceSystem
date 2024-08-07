import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeDashboardRoutingModule } from './employee-dashboard-routing.module';
import { EmployeeDashboardComponent } from './employee-dashboard.component';
import { FormsModule } from '@angular/forms';
import { HeaderModule } from 'src/app/header/header.module';


@NgModule({
  declarations: [EmployeeDashboardComponent],
  imports: [
    CommonModule,
    EmployeeDashboardRoutingModule,
    FormsModule,
    HeaderModule
  ],
  exports:[EmployeeDashboardComponent]
})
export class EmployeeDashboardModule { }
