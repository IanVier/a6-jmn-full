import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nav',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {


  collapseNavbar() {
  const navbar = document.getElementById('navbarSupportedContent');
  if (navbar && navbar.classList.contains('show')) {
    navbar.classList.remove('show');
  }
}

}
