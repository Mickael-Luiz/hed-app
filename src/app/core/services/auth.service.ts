import { Injectable } from '@angular/core';
import { ContextStore } from '../state/context/context.store';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor(private context: ContextStore) {}

  loginSimples() {
    this.context.setUser({
      id: '1',
      nome: 'Mickael Luiz',
      cpf: '05233662132',
      email: 'mickaeldias00@gmail.com'
    })
  }

  logout() {
    this.context.clear();
  }
}
