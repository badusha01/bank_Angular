import { Component } from '@angular/core';
import { Router } from '@angular/router';

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
  userDetails:any={
    1000:{username:"anu",acno:1000,password:"abc123",balance:0},
    1001:{username:"amal",acno:1001,password:"abc123",balance:0},
    1002:{username:"arun",acno:1002,password:"abc123",balance:0},
    1003:{username:"mega",acno:1003,password:"abc123",balance:0},
  }

  constructor(private router:Router){}

    login(){
      var acnum=this.acno
      var psw=this.pass
      var userDetails=this.userDetails
      if(acnum in userDetails){
        if(psw==userDetails[acnum]["password"]){
    
            alert('login success')
            // redirection
            this.router.navigateByUrl("dashboard")

          }
          else{
            alert('incorrect password')
          }
        }
        else{
          alert('incorrect account number')
        }
      

    // }
    // acnoChange(event:any){
    //    this.acno=event.target.value
    //    console.log(event.target.value);

    // }
    // passChange(event:any){
    //   this.pass=event.target.value
    //   console.log(this.pass);
      

    // }
    

  
      }


}
 