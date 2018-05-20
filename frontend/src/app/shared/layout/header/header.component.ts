import { Component, OnInit } from '@angular/core';
import { navigationLinks } from 'src/app/navigation-links';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  links = navigationLinks;
  isMenuOpen = false;

  constructor() { }

  ngOnInit() {
  }

  toggleMenuOpen() { // click handler
    this.isMenuOpen = !this.isMenuOpen;
  }

}
