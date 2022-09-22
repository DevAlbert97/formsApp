import { Component, OnInit } from '@angular/core';

interface MenuItem {
  text : string;
  route  : string;
}


@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css'],
})
export class SideMenuComponent {
  templateMenu: MenuItem[] = [
    {
      text: 'Basicos',
      route: './template/basicos',
    },
    {
      text: 'Dinamicos',
      route: './template/dinamicos',
    },
    {
      text: 'Switches',
      route: './template/switches',
    },
  ];

  reactiveMenu: MenuItem[] = [
    {
      text: 'Basicos',
      route: './reactive/basicos',
    },
    {
      text: 'Dinamicos',
      route: './reactive/dinamicos',
    },
    {
      text: 'Switches',
      route: './reactive/switches',
    },
  ];

  authMenu: MenuItem[] = [
    {
      text: 'Login',
      route: './auth/login',
    },
    {
      text: 'Registro',
      route: './auth/registro',
    },
  ];
}
