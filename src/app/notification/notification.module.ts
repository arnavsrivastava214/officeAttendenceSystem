import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotificationRoutingModule } from './notification-routing.module';
import { NotificationComponent } from './notification.component';
import { HeaderModule } from '../header/header.module';


@NgModule({
  declarations: [NotificationComponent],
  imports: [
    CommonModule,
    NotificationRoutingModule,
    HeaderModule
  ],
  exports:[
    NotificationComponent
  ]
})
export class NotificationModule { }
