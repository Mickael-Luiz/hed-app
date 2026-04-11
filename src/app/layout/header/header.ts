import { Component } from '@angular/core';
import { ContextStore } from '../../core/state/context/context.store';
import { Select } from 'primeng/select';

@Component({
  selector: 'app-header',
  imports: [
    Select
  ],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {

  constructor(public context: ContextStore) { }

  changeActiveInstitution(id: string) {
    this.context.setActiveInstitution(id);
  }

  getInitials(): string {
    const nome = this.context.user()?.nome || '';
    return nome
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  }

}
