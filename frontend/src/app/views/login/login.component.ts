import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/auth.service';
import { User } from 'src/app/models';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ValidatorFn } from '@angular/forms';
import { AbstractControl } from '@angular/forms';
import { resetFakeAsyncZone } from '@angular/core/testing';
import { ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: User = new User;
  loading = false;
  error: string | boolean = '';
  loginForm: FormGroup;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
  ) { }

  ngOnInit() {
    this.createForm();
  }

  private createForm() {
    this.loginForm = new FormGroup({
      // tslint:disable-next-line:max-line-length
      email: new FormControl('', { validators: [Validators.required, this.patternValidator(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)], updateOn: 'blur' }),
      password: new FormControl('', { validators: Validators.required },
    });
  }

  public onSubmit() {
    this.loading = true;
    this.authenticationService.login(this.loginForm.get('email').value, this.loginForm.get('password').value)
      .subscribe(result => {
        if (result === true) {
          this.router.navigate(['/']);
        } else {
          console.log(result);
          this.error = result;
          this.loading = false;
        }
      });
  }

  get email() { return this.loginForm.get('email'); }

  get password() { return this.loginForm.get('password'); }

  patternValidator(regexp: RegExp): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      const value = control.value;
      if (value === '') {
        return null;
      }
      return !regexp.test(value) ? { 'patternInvalid': { regexp } } : null;
    };
  }
}
