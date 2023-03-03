import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  data="Your Perfect Banking Partner"
  data1="enter your password"

  // acno=""
  // or 
  acno:any
  pass:any
  userDetails={
    1000:{username:"anu",acno:1000,password:"abc123",balance:0},
    1001:{username:"amal",acno:1001,password:"abc123",balance:0},
    1002:{username:"arun",acno:1002,password:"abc123",balance:0},
    1003:{username:"mega",acno:1003,password:"abc123",balance:0},
  }

    login(){
      alert('login worked')
    }
    acnoChange(event:any){
       this.acno=event.target.value
       console.log(event.target.value);

    }
    passChange(event:any){
      this.pass=event.target.value
      console.log(this.pass);
      

    }
    


}

