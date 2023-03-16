import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Data, Router } from '@angular/router';
import { DataService } from 'services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  //  acno:any
  //  psw:any
  //  uname:any
  constructor(private ds: DataService, private router: Router, private fb: FormBuilder) { }

  //  model for register form
  registerForm = this.fb.group({
    acno: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    psw: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
    uname: ['', [Validators.required, Validators.pattern('[a-zA-Z]+')]]
  })

  register() {
    var acno = this.registerForm.value.acno
    var psw = this.registerForm.value.psw
    var uname = this.registerForm.value.uname


    if (this.registerForm.valid) {
      const result = this.ds.register(acno, uname, psw)
      if (result) {
        alert('registered')
        this.router.navigateByUrl("")
      }
      else {
        alert('user already present')
      }

    }
    else {
      alert('Invalid form')
    }
  }
}