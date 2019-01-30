import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //loginUserData: any= {}
  loading = false;
  loginForm: FormGroup;
  submitted = false;
  constructor(private _auth: AuthService,
    private _router: Router,
    private formBuilder: FormBuilder,) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
  });


  this._auth.logoutUser();
  }

  get f() { return this.loginForm.controls; }

  onSubmit(){
    this.submitted = true;
    if (this.loginForm.invalid) {
      return
    }
    this.loading = true;
    //console.log(this.f.username.value, this.f.password.value)
    this._auth.loginUser(this.f.email.value, this.f.password.value)
    .pipe(first())
    .subscribe(
      res => {
        localStorage.setItem('token', res.token)
        this._router.navigate(['/special'])
      },
      err => console.log(err)
    )     
    
    
  }


}
