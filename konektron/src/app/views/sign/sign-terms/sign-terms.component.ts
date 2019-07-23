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
  // Function back to the register
  backSignup() {
    this.router.navigate(['/signup']);
  }
  // Function back to the register
}
