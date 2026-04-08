import { Component } from '@angular/core';
import { ContextStore } from '../../core/state/context/context.store';
import { RoleEnum } from '../../shared/enums/role.enum';

@Component({
  selector: 'app-courses',
  imports: [],
  templateUrl: './courses.html',
  styleUrl: './courses.scss',
})
export class Courses {

  role = RoleEnum;

  constructor(public context: ContextStore) { }

}
