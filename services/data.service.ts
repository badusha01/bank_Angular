import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  currentUser:any
  currentAcno:any
  
  userDetails:any={
    1000:{username:"anu",acno:1000,password:"abc123",balance:0,transaction:[]},
    1001:{username:"amal",acno:1001,password:"abc123",balance:0,transaction:[]},
    1002:{username:"arun",acno:1002,password:"abc123",balance:0,transaction:[]},
    1003:{username:"megha",acno:1003,password:"abc123",balance:0,transaction:[]}
  }
  constructor() { }
  // currentUser:any
   
  register (acno:any,uname:any,psw:any){
    var userDetails=this.userDetails
    if(acno in userDetails){
      return false
    }
    else{
      userDetails[acno]={username:uname,acno,password:psw,balance:0,transaction:[]}
      console.log(userDetails);
      
      return true
    }
  }

  login(acno:any,psw:any){
    var userDetails=this.userDetails
    if(acno in userDetails){
      if(psw==userDetails[acno]["password"]){
        // store current user
        this.currentUser=userDetails[acno]["username"]
        this.currentAcno=acno
        return true 
      }
      else{
        return false
      }
    }
    else{
      return false
    }
  }
   
  deposit(acno:any,psw:any,amnt:any){
    // to convert string amnt to int
    var amount=parseInt(amnt)
    var userDetails=this.userDetails
    if(acno in userDetails){
      if(psw==userDetails[acno]["password"]){
        userDetails[acno]["balance"]+=amount
        console.log(userDetails);
        // add transaction data
        userDetails[acno]["transaction"].push(
          {
            Type:"Credit",
            Amount:amount 
          }
        )
        return userDetails[acno]["balance"]

      }
      else{
        return false
      }
    }
    else{
      return false
    }

  }


  withdraw(acno:any,psw:any,amnt:any){
    // to convert string amnt to int
    var amount=parseInt(amnt)
    var userDetails=this.userDetails
    if(acno in userDetails){
      if(psw==userDetails[acno]["password"]){
        if(amount<userDetails[acno]["balance"]){
          userDetails[acno]["balance"]-=amount
          console.log(userDetails);

          userDetails[acno]["transaction"].push(
            {
              Type:"Debit",
              Amount:amount 
            }
          )
          // console.log(userDetails);
          
          
          return userDetails[acno]["balance"]
        }
        else{
          alert('Insufficient balance')
        }
       

      }
      else{
        return false
      }
    }
    else{
      return false
    }

  }

  getTransaction(acno:any){
    return this.userDetails[acno].transaction 

  }

}
