import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public navBarOpen = false;
  constructor() { }

  ngOnInit() {
  }

  public toggleNavBar() {
    this.navBarOpen = !this.navBarOpen;
  }

}
