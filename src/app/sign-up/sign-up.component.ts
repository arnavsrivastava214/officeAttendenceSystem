import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  signupObj:any = {
    role:"employee",
    status:"active",
    numberofleavesleft:12
  };

  getFormSignUpValues(){

    let user:any = JSON.parse(<any>localStorage.getItem("users"));
      if(user){
        this.signupObj['employeeid'] = user.length+1;
        user.push(this.signupObj);
          localStorage.setItem("users",JSON.stringify(user));
      }
    
  }
}
