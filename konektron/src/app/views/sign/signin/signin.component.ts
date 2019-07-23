import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  formSignin = this.formBuilder.group({
    email: ['', [Validators.required, Validators.nullValidator]],
    password: ['', [Validators.required, Validators.nullValidator]],
    remember: ['']
  });

  public formLogin: any[] = [];
  public email: string;
  public password: string;
  public remember;
  public encodeEmail: string;
  public encodePassword: string;
  public checkbox;
  public statusRemember;
  public decodeEmail: string;
  public decodePassword: string;
  public user: string;
  public key: string;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    // hidden alerts
    document.getElementById('alert1').style.visibility = 'hidden';
    document.getElementById('alert2').style.visibility = 'hidden';
    // hidden alerts

    // Verify status remember
    this.statusRemember = localStorage.getItem('remember');
    if ( this.statusRemember === 'true' ) {
      this.user = localStorage.getItem('user');
      this.decodeEmail = window.atob(this.user);
      this.key = localStorage.getItem('key');
      this.decodePassword = window.atob(this.key);
      this.formSignin = this.formBuilder.group({
        email: [this.decodeEmail, [Validators.required, Validators.nullValidator]],
        password: [this.decodePassword, [Validators.required, Validators.nullValidator]],
        remember: ['true']
      });
    } else {
      this.formSignin = this.formBuilder.group({
        email: ['', [Validators.required, Validators.nullValidator]],
        password: ['', [Validators.required, Validators.nullValidator]],
        remember: ['']
      });
    }
  }
  // Verify status remember

  // function login
  login() {
    this.formLogin.push(this.formSignin.value);
    this.email = this.formLogin[0].email;
    this.password = this.formLogin[0].password;
    this.remember = this.formLogin[0].remember;
    this.encodeEmail = window.btoa(this.email);
    this.encodePassword = window.btoa(this.password);
    if ( this.password.length >= 6 ) {
      if ( this.email !== '' && this.password !== '' ) {
        localStorage.setItem( 'auth', 'true' );
        this.router.navigate(['/dashboard']);
        if ( this.remember === true ) {
          localStorage.setItem( 'remember', 'true' );
          localStorage.setItem( 'user', this.encodeEmail );
          localStorage.setItem( 'key', this.encodePassword );
        } else {
          localStorage.setItem( 'remember', 'false' );
        }
      } else {
        this.emailValid();
      }
    } else {
      this.passValid();
    }
  }
  // function login

  // Valid E-mail
  emailValid() {
    if ( this.email === '' ) {
      document.getElementById('alert1').style.visibility = 'visible';
      document.getElementById('alert1').style.position = 'relative';
      setTimeout(() => {
        $(document).ready(() => {
          $('#alert1').fadeOut(3000);
          location.reload();
        });
      }, 3000);
    }
  }
  // Valid E-mail

  // Valid password
  passValid() {
    document.getElementById('alert2').style.visibility = 'visible';
    document.getElementById('alert2').style.position = 'relative';
    setTimeout(() => {
      $(document).ready(() => {
        $('#alert2').fadeOut(3000);
        location.reload();
      });
    }, 3000);
  }
  // Valid password
}

