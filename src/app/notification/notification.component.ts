import { Component } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent {

  leaveRequest:any=[];
  showModal:boolean= false;
  newLeaveRequestLocal:any

  ngOnInit(){
    this.leaveRequest  = JSON.parse(<any>localStorage.getItem("leaveRequest")) || [];
    console.log(this.leaveRequest);
    
  }

  
  allowRequest(employee:any){
    this.newLeaveRequestLocal =  this.leaveRequest.map((e:any)=>{
      if(e.employeeId == employee.employeeId){
        e.status = "Approved";
      }
      return e;
    });
    localStorage.setItem("leaveRequest",JSON.stringify(this.newLeaveRequestLocal));
    
  }


  denyRequest(indx:any){
    this.leaveRequest.splice(indx,1);
    this.showModal = false;
    localStorage.removeItem("leaveRequest");
    

  }
}
