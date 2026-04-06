import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar {

  menuItems = [
    { label: 'Home', link: '/home' },
    { label: 'Cursos', link: '/cursos' },
    { label: 'Disciplinas', link: '/disciplinas' },
    { label: 'Conteúdos', link: '/conteudos' },
    { label: 'Eventos', link: '/eventos' },
    { label: 'Oportunidades', link: '/oportunidades' },
    { label: 'Perfil', link: '/perfil' },
  ];

}
