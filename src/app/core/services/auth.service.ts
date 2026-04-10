import { Injectable } from '@angular/core';
import { ContextStore } from '../state/context/context.store';
import { RoleEnum } from '../../shared/enums/role.enum';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  fakeResponse = {
    user: {
      id: '1',
      nome: 'Mickael',
      email: 'teste@email.com',
      cpf: '05233662132'
    },
    institutions: [
      {
        institution: { id: '1', nome: 'Faculdade Manopla', cnpj: '53.704.095/0001-90' },
        role: 'ADMIN' as RoleEnum
      },
      {
        institution: { id: '2', nome: 'Faculdade Pegasus', cnpj: '09.128.533/0001-28'},
        role: 'AUNO' as RoleEnum
      }
    ]
  }

  constructor(private context: ContextStore) { }

  loginFake() {

    this.context.setContext({
      user: this.fakeResponse.user,
      institutions: this.fakeResponse.institutions,
      activeInstitution: this.fakeResponse.institutions[0]
    });

  }

  logout() {
    this.context.clear();
  }

}
