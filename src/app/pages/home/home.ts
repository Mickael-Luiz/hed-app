import { Component } from '@angular/core';
import { ContextStore } from '../../core/state/context/context.store';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

  constructor(public context: ContextStore){}

}
