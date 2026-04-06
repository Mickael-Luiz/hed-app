import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IconName, Icon } from '../../../../public/images/icons/icon';

export interface IMenu {
  label: string,
  link: string,
  icon: IconName
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    Icon
],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar {

  menuItems: IMenu[] = [
    { label: 'Home', link: '/', icon: 'house' },
    { label: 'Cursos', link: '/cursos', icon: 'courses' },
    { label: 'Disciplinas', link: '/disciplinas', icon: 'disciplines' },
    { label: 'Conteúdos', link: '/conteudos', icon: 'contents' },
    { label: 'Eventos', link: '/eventos', icon: 'events' },
    { label: 'Oportunidades', link: '/oportunidades', icon: 'opportunities' },
    { label: 'Perfil', link: '/perfil', icon: 'profile' },
  ];

}
