import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IActiveContext } from './shared/interfaces/active-context.interface';
import { ContextStore } from './core/state/context/context.store';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  
  constructor(private context: ContextStore) {}

  ngOnInit() {
    this.context.loadFromStorage();
  }

}
