import { Injectable } from '@angular/core';
import { ContextStore } from '../state/context/context.store';
import { RoleEnum } from '../../shared/enums/role.enum';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor(private context: ContextStore) {}

  loginFake() {
    const fakeResponse = {
      user: {
        id:  '1',
        nome: 'Mickael',
        email: 'teste@email.com',
        cpf: '05233662132'
      },
      institutions: [
        { id: '1', nome: 'Faculdade A', cnpj: '53.704.095/0001-90' },
        { id: '2', nome: 'Faculdade B', cnpj: '09.128.533/0001-28' }
      ]
    }

    this.context.setContext({
      user: fakeResponse.user,
      institution: fakeResponse.institutions[0],
      role: RoleEnum.ADMIN
    })

  }

  logout() {
    this.context.clear();
  }

}
