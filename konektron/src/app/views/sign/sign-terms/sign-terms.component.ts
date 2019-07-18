import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-terms',
  templateUrl: './sign-terms.component.html',
  styleUrls: ['./sign-terms.component.scss']
})
export class SignTermsComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }
  backSignup() {
    this.router.navigate(['/signup']);
  }
}
