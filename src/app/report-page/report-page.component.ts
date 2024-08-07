import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule, getLocaleMonthNames } from '@angular/common';

@Component({
  selector: 'app-report-page',
  templateUrl: './report-page.component.html',
  styleUrls: ['./report-page.component.css']
})
export class ReportPageComponent {
  employeeList: any = [];
  requestLeaveStatus: any;
  changeStatus: any

  constructor(private router: Router) {

  }

  ngOnInit() {
    this.employeeList = JSON.parse(<any>localStorage.getItem("users"));
    this.employeeList.forEach((el:any)=>{
      
      this.requestLeaveStatus = JSON.parse(<any>localStorage.getItem("leaveRequest"))
      this.requestLeaveStatus.forEach((element:any)=>{
        if(element.status === "Approved"){
        el.status = "InActive";
        } 
      })
        
      })
  }
  logout() {
    this.router.navigate(["/"]);
    localStorage.removeItem("currentManager");
  }


}
