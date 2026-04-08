import { Component } from '@angular/core';
import { ContextStore } from '../../core/state/context/context.store';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

  constructor(public context: ContextStore, private auth: AuthService){}

  changeContext() {
    this.auth.changeContext()
  }

}
