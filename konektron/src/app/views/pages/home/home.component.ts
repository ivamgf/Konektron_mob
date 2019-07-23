import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.navSignin();
  }
  // Function redirect login
  navSignin() {
    setTimeout(() => {
      this.router.navigate(['signin']);
    }, 3000);
  }
  // Function redirect login
}
