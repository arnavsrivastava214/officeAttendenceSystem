import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import("./login/login.module").then(m => m.LoginModule)
  },
  {
    path: "signUp",
    loadChildren: () => import("./sign-up/sign-up.module").then(m => m.SignUPModule)
  },
  {
    path: "report-page",
    loadChildren: () => import("./report-page/report-page.module").then(m => m.ReportPageModule)
  },
  {
    path: "employee_dashboard",
    loadChildren: () => import("./employee/employee-dashboard/employee-dashboard.module").then(m => m.EmployeeDashboardModule)
  },
  {
    path: "user-notification",
    loadChildren: () => import("./notification/notification.module").then(m=>m.NotificationModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
