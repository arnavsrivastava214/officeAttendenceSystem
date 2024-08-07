import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.css']
})
export class EmployeeDashboardComponent {
  userProfileData: any = {};
  showModal: any = false;
  numLeaves: any;
  currentLeaveStatus: any = 'Not Applied';

  constructor(private router:Router) { }


  ngOnInit() {
    this.userProfileData = JSON.parse(<any>localStorage.getItem("currentEmployee"))
    let leaveRequest:any = JSON.parse(<any>localStorage.getItem("leaveRequest"));
      if(leaveRequest){
        leaveRequest.forEach((e:any)=>{
            if(e.employeeId == this.userProfileData.employeeid){
                this.currentLeaveStatus = e.status;
                if(e.status == "Approved"){
                  this.userProfileData.numberofleavesleft -= e.numberOfLeaves;
                  this.userProfileData.status = "InActive";
                }
            } 
        })
      }
  }

  applyForLeave() {
    let leaveData:any[] = JSON.parse(<any>localStorage.getItem("leaveRequest"));
    
    if(leaveData?.length>0){
      leaveData.push({
        employeeName: this.userProfileData.name,
        employeeId: this.userProfileData.employeeid,
        numberOfLeaves: this.numLeaves,
        status: 'Applied' 
      })
      localStorage.setItem("leaveRequest", JSON.stringify(leaveData));
      this.showModal = false;
      this.currentLeaveStatus = "Applied"
    }else{
      let leaveData:any= [];
      leaveData.push({
        employeeName: this.userProfileData.name,
        employeeId: this.userProfileData.employeeid,
        numberOfLeaves: this.numLeaves,
        status: 'Applied'
      })
      localStorage.setItem("leaveRequest", JSON.stringify(leaveData));
      this.showModal = false;
      this.currentLeaveStatus = "Applied"
    }
  }

  logout(){
    this.router.navigate(['/'])
  }

}




