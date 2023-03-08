import { Component } from '@angular/core';
import { Data } from '@angular/router';
import { DataService } from 'services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
 acno:any
 psw:any
 uname:any
 constructor(private ds: DataService){
  
 }

 register(){
  var acno=this.acno
  var psw=this.psw
  var uname=this.uname

  const result=this.ds.register(acno,uname,psw)
  if(result){
    alert('registered')
  }
  else{
    alert('user already present')
  }

 }
}
