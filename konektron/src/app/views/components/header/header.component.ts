import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public auth;

  constructor() { }

  ngOnInit() {
    document.getElementById('btn-collapse').style.visibility = 'hidden';

    this.auth = localStorage.getItem( 'auth' );

    if ( this.auth === 'true' ) {
      document.getElementById('btn-collapse').style.visibility = 'visible';
    }
  }
  logout() {
    localStorage.setItem( 'auth', 'false' );
    document.getElementById('btn-collapse').style.visibility = 'hidden';
  }

}
