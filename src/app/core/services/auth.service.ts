import { Injectable } from '@angular/core';
import { ContextStore } from '../state/context/context.store';
import { RoleEnum } from '../../shared/enums/role.enum';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  fakeResponse = {
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

  constructor(private context: ContextStore) {}

  loginFake() {

    this.context.setContext({
      user: this.fakeResponse.user,
      institution: this.fakeResponse.institutions[0],
      role: RoleEnum.ADMIN
    })

  }

  setInstitution() {
    if(this.context.institution()?.id == '1') {
      this.context.setInstitution(this.fakeResponse.institutions[1]);
      return;
    }
    if(this.context.institution()?.id == '2') {
      this.context.setInstitution(this.fakeResponse.institutions[0]);
      return;
    }
  }

  logout() {
    this.context.clear();
  }

}
