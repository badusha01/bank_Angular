import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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

  constructor(private router:Router,private ds:DataService,private fb:FormBuilder){}

  // model
  loginForm=this.fb.group({
    acno:['',[Validators.required,Validators.pattern('[0-9]+')]],
    psw:['',[Validators.required,Validators.pattern('[0-9a-zA-Z]+')]]
  })
    login(){
   
      var acno=this.loginForm.value.acno
      var psw=this.loginForm.value.psw
      if(this.loginForm.valid){
      const result=this.ds.login(acno,psw)


      if(result){
        alert('login success')
        this.router.navigateByUrl("dashboard")
      }
      else{
        alert("incorrect acno or password")
      }
      }
      else{
             alert('invalid form')
      }
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
    

  
      


 