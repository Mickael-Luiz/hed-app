import { Component } from '@angular/core';
import { ContextStore } from '../../core/state/context/context.store';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {

  constructor(public context: ContextStore) { }

  changeActiveInstitution(event: Event) {
    const id = (event.target as HTMLSelectElement).value;
    this.context.setActiveInstitution(id);
  }

}
