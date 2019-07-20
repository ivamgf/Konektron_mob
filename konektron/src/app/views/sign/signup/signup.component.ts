import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  formRegister = this.formBuilder.group({
    name: ['', [Validators.required, Validators.nullValidator]],
    nickname: ['', [Validators.required, Validators.nullValidator]],
    sex: ['', [Validators.required, Validators.nullValidator]],
    natId: ['', [Validators.required, Validators.nullValidator]],
    phone: ['', [Validators.required, Validators.nullValidator]],
    email: ['', [Validators.required, Validators.nullValidator]],
    password: ['', [Validators.required, Validators.nullValidator]],
    confirm: ['', [Validators.required, Validators.nullValidator]],
    terms: ['']
  });

  public formReg: any[] = [];
  public name: string;
  public nickname: string;
  public terms;
  public sex: string;
  public natId;
  public phone;
  public email: string;
  public password: string;
  public confirm: string;
  public maskNatId = [/[0-9]/, /[0-9]/, /[0-9]/, '.', /[0-9]/, /[0-9]/, /[0-9]/, '.', /[0-9]/, /[0-9]/, /[0-9]/, '/', /[0-9]/, /[0-9]/];
  public maskPhone = ['(', /[0-9]/, /[0-9]/, ')', /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, '-', /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/];
  public sum: number;
  public rest: number;
  public strCPF: string;
  public statusCPF;
  public auxCPF;

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

    this.formRegister = this.formBuilder.group({
      name: ['', [Validators.required, Validators.nullValidator]],
      nickname: ['', [Validators.required, Validators.nullValidator]],
      sex: ['', [Validators.required, Validators.nullValidator]],
      natId: ['', [Validators.required, Validators.nullValidator]],
      phone: ['', [Validators.required, Validators.nullValidator]],
      email: ['', [Validators.required, Validators.nullValidator]],
      password: ['', [Validators.required, Validators.nullValidator]],
      confirm: ['', [Validators.required, Validators.nullValidator]],
      terms: ['true']
    });
  }
  register() {
    this.formReg.push(this.formRegister.value);
    this.name = this.formReg[0].name;
    this.nickname = this.formReg[0].nickname;
    this.sex = this.formReg[0].sex;
    this.natId = this.formReg[0].natId;
    this.natId = this.natId.replace(/\D/g, '');
    this.phone = this.formReg[0].phone;
    this.phone = this.phone.replace(/\D/g, '');
    this.email = this.formReg[0].email;
    this.password = this.formReg[0].password;
    this.confirm = this.formReg[0].confirm;
    this.terms = this.formReg[0].terms;
    if (this.terms === 'true') {
      if ( this.name !== '' && this.nickname !== '' ) {
        if ( this.natId !== '' && this.phone !== '' ) {
          if ( this.sex !== '' && this.email !== '' ) {
            if ( this.password !== '' ) {
              if ( this.confirm !== '' ) {
                if ( this.password.length >= 6 && this.confirm.length >= 6 ) {
                  if ( this.password === this.confirm ) {
                    window.scrollTo(0, -500);
                    document.getElementById('alert3').style.visibility = 'visible';
                    document.getElementById('alert3').style.position = 'relative';
                  } else {
                    document.getElementById('alert2').style.visibility = 'visible';
                    document.getElementById('alert2').style.position = 'relative';
                    setTimeout(() => {
                      $(document).ready(() => {
                        $('#alert2').fadeOut(3000);
                        location.reload();
                      });
                    }, 3000);
                  }
                } else {
                  document.getElementById('alert4').style.visibility = 'visible';
                  document.getElementById('alert4').style.position = 'relative';
                  setTimeout(() => {
                    $(document).ready(() => {
                      $('#alert4').fadeOut(3000);
                      location.reload();
                    });
                  }, 3000);
                }
              }
            }
          }
        }
      }
      if ( this.name === '' ) {
        document.getElementById('alert1').style.visibility = 'visible';
        document.getElementById('alert1').style.position = 'relative';
        setTimeout(() => {
          $(document).ready(() => {
            $('#alert1').fadeOut(3000);
            location.reload();
          });
        }, 3000);
      }
      if ( this.nickname === '' ) {
        document.getElementById('alert1').style.visibility = 'visible';
        document.getElementById('alert1').style.position = 'relative';
        setTimeout(() => {
          $(document).ready(() => {
            $('#alert1').fadeOut(3000);
            location.reload();
          });
        }, 3000);
      }
      if ( this.natId === '' ) {
        document.getElementById('alert1').style.visibility = 'visible';
        document.getElementById('alert1').style.position = 'relative';
        setTimeout(() => {
          $(document).ready(() => {
            $('#alert1').fadeOut(3000);
            location.reload();
          });
        }, 3000);
      }
      this.validCpf();
      if ( this.phone === '' ) {
        document.getElementById('alert1').style.visibility = 'visible';
        document.getElementById('alert1').style.position = 'relative';
        setTimeout(() => {
          $(document).ready(() => {
            $('#alert1').fadeOut(3000);
            location.reload();
          });
        }, 3000);
      }
      if ( this.sex === '' ) {
        document.getElementById('alert1').style.visibility = 'visible';
        document.getElementById('alert1').style.position = 'relative';
        setTimeout(() => {
          $(document).ready(() => {
            $('#alert1').fadeOut(3000);
            location.reload();
          });
        }, 3000);
      }
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
        document.getElementById('alert1').style.visibility = 'visible';
        document.getElementById('alert1').style.position = 'relative';
        setTimeout(() => {
          $(document).ready(() => {
            $('#alert1').fadeOut(3000);
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
  }
  backSignin() {
    this.router.navigate(['/signin']);
  }
  validCpf() {
    this.strCPF = this.natId;
    this.sum = 0;
    if ((this.strCPF === '00000000000') ||
        (this.strCPF === '11111111111') ||
        (this.strCPF === '22222222222') ||
        (this.strCPF === '33333333333') ||
        (this.strCPF === '44444444444') ||
        (this.strCPF === '55555555555') ||
        (this.strCPF === '66666666666') ||
        (this.strCPF === '77777777777') ||
        (this.strCPF === '88888888888') ||
        (this.strCPF === '99999999999')) {
      this.statusCPF = false;
      console.log('valid1:', this.statusCPF);
      return false;
    }
    if (this.strCPF) {
      let i: number;
      const vectorRest: any[] = [];
      for (i = 1; i <= (this.strCPF.length - 2); i++) {
        this.auxCPF = parseInt( this.strCPF.substr(i - 1, i), 10 ) * (11 - i);
        this.sum = this.sum + this.auxCPF;
        vectorRest.push((this.sum * 10) % 11);
        this.rest = vectorRest[8];
      }
      if ((this.rest === 10) || this.rest === 11) {
        this.rest = 0;
        }
      if (this.rest !== parseInt( this.strCPF.substr(8, 1), 10)) {
        this.statusCPF = false;
        console.log('valid2:', this.statusCPF);
        return false;
      } else {
        console.log('CPF Válido!');
      }
    }
  }
}
