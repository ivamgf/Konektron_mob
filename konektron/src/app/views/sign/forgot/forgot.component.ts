import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss']
})
export class ForgotComponent implements OnInit {

  formForgot = this.formBuilder.group({
    password: ['', [Validators.required, Validators.nullValidator]],
    confirm: ['', [Validators.required, Validators.nullValidator]]
  });

  public password: string;
  public confirm: string;
  public formRecovery: any[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    document.getElementById('alert1').style.visibility = 'hidden';
    document.getElementById('alert2').style.visibility = 'hidden';
    document.getElementById('alert3').style.visibility = 'hidden';
    document.getElementById('alert4').style.visibility = 'hidden';
    document.getElementById('alert5').style.visibility = 'hidden';
  }
  // Function forgot password
  forgot() {
    this.formRecovery.push(this.formForgot.value);
    this.password = this.formRecovery[0].password;
    this.confirm = this.formRecovery[0].confirm;
    if ( this.password !== '' && this.confirm !== '' ) {
      if ( this.password.length >= 6 && this.confirm.length >= 6 ) {
        if ( this.password === this.confirm ) {
          document.getElementById('alert4').style.visibility = 'visible';
          document.getElementById('alert4').style.position = 'relative';
        } else {
          document.getElementById('alert3').style.visibility = 'visible';
          document.getElementById('alert3').style.position = 'relative';
          setTimeout(() => {
            $(document).ready(() => {
              $('#alert3').fadeOut(3000);
              location.reload();
            });
          }, 3000);
        }
      } else {
        document.getElementById('alert5').style.visibility = 'visible';
        document.getElementById('alert5').style.position = 'relative';
        setTimeout(() => {
          $(document).ready(() => {
            $('#alert5').fadeOut(3000);
            location.reload();
          });
        }, 3000);
      }

    } else {
      if ( this.password === '' ) {
        document.getElementById('alert1').style.visibility = 'visible';
        document.getElementById('alert1').style.position = 'relative';
        setTimeout(() => {
          $(document).ready(() => {
            $('#alert1').fadeOut(3000);
            location.reload();
          });
        }, 3000);
      }
      if ( this.confirm === '' ) {
        document.getElementById('alert2').style.visibility = 'visible';
        document.getElementById('alert2').style.position = 'relative';
        setTimeout(() => {
          $(document).ready(() => {
            $('#alert2').fadeOut(3000);
            location.reload();
          });
        }, 3000);
      }
    }
  }
  // Function forgot password
  // Function back to the login
  backSignin() {
    this.router.navigate(['/signin']);
  }
  // Function back to the login
}
