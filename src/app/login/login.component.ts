import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginObj: any = {};
  loginArr: any = [];
  userList:any=[];


  constructor(private _router: Router) { }

  ngOnInit(){
    let localStorageUser:any = JSON.parse(<any>localStorage.getItem("users"));
    if(!localStorageUser){
     this.userList = 
     [
      {
        "role": "manager",
        "email": "manager@gmail.com",
        "password": "manager@gmail.com",
        "name": "Manager",
        "employeeid": 1,
        "status": "Active",
        "numberofleavesleft": 12,
        "departement": "HR"
      },
      {
        "role": "employee",
        "name": "Alice",
        "email": "alice@gmail.com",
        "password": "alice@gmail.com",
        "employeeid": 2,
        "status": "Active",
        "numberofleavesleft": 12,
        "departement": "IT"
      },
      {
        "role": "employee",
        "name": "Bob Smith",
        "email": "bob@gmail.com",
        "password": "bob@gmail.com",
        "employeeid": 3,
        "status": "Active",
        "numberofleavesleft": 12,
        "departement": "IT"
      },
      {
        "role": "employee",
        "name": "Rahul",
        "email": "rahul@gmail.com",
        "password": "rahul@gmail.com",
        "employeeid": 4,
        "status": "inactive",
        "numberofleavesleft": 12,
        "departement": "IT"
      },
      {
        "role": "employee",
        "name": "gurpreet",
        "email": "guru@gmail.com",
        "password": "guru@gmail.com",
        "employeeid": 5,
        "status": "Active",
        "numberofleavesleft": 12,
        "departement": "IT"
      },
      {
        "role": "employee",
        "name": "Aman",
        "email": "aman@gmail.com",
        "password": "aman@gmail.com",
        "employeeid": 6,
        "status": "inactive",
        "numberofleavesleft": 12,
        "departement": "IT"
      },
      {
        "role": "employee",
        "name": "Ranu",
        "email": "ranu@gmail.com",
        "password": "ranu@gmail.com",
        "employeeid": 7,
        "status": "Active",
        "numberofleavesleft": 12,
        "departement": "IT"
      }
    ];
    localStorage.setItem("users",JSON.stringify(this.userList));
  } else{
      this.userList  = localStorageUser;
  }
}

  login() {
    this.userList.forEach((element: any) => {
      if (this.loginObj.email == element.email && this.loginObj.password == element.password) {
        if(element.role == 'manager'){
          this._router.navigate(["/report-page"])
          localStorage.setItem("currentManager",JSON.stringify(element));
        }else{
          this._router.navigate(['/employee_dashboard']);
          localStorage.setItem("currentEmployee",JSON.stringify(element));
        }
      }
    })

  }
}


