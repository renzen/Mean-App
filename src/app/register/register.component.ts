import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl,  FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { UserValidators } from '../shared/useremail.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  loading = false;

  constructor(private _auth: AuthService,
    private _router: Router,
    private formBuilder: FormBuilder,
    private service: UserValidators) { }

    ngOnInit() {
      this.createUser();
    }

  createUser() {
    this.registerForm = this.formBuilder.group({
      email: [
        // initial value
        null,
        // sync built-in validators
        Validators.compose(
          [ Validators.required, Validators.email ],
        ),
        // custom async validator
        this.service.userValidator()
      ],
      password: ['', [Validators.required, Validators.minLength(6)]]  
    });
  }

  get email() {
    return this.registerForm.get('email');
  }

  get password() {
    return this.registerForm.get('password');
  }

  onSubmit() {
    
    alert(this.registerForm.value);
    console.log(this.registerForm.value)
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
  }

    this.loading = true;
    this._auth.registerUser(this.registerForm.value)
      .subscribe(
        res => {
          localStorage.setItem('token', res.token)
          this._router.navigate(['/special'])
        },
        err => console.log(err)
      )
  }

}
