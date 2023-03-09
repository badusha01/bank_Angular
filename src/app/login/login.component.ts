import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'services/data.service';

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
  // userDetails:any={
  //   1000:{username:"anu",acno:1000,password:"abc123",balance:0},
  //   1001:{username:"amal",acno:1001,password:"abc123",balance:0},
  //   1002:{username:"arun",acno:1002,password:"abc123",balance:0},
  //   1003:{username:"mega",acno:1003,password:"abc123",balance:0},
  // }

  constructor(private router:Router,private ds:DataService){}

    login(){
      var acnum=this.acno
      var psw=this.pass
   
      const result=this.ds.login(acnum,psw)
      if(result){
        alert('login success')
        this.router.navigateByUrl("dashboard")
      }
      else{
        alert("incorrect acno or password")
      }

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



 