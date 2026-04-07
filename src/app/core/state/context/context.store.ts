import { computed, Injectable, signal } from "@angular/core";
import { IUser } from "../../domain/user.interface";
import { IActiveContext } from "../../../shared/interfaces/active-context.interface";
import { IInstitution } from "../../domain/institution.interface";

@Injectable({ providedIn: 'root' })
export class ContextStore {

  private _context = signal<IActiveContext | null>(null);
  context = this._context.asReadonly();

  user = computed(() => this._context()?.user ?? null);
  institution = computed(() => this._context()?.institution ?? null);
  role = computed(() => this._context()?.role ?? null);

  setContext(ctx: IActiveContext) {
    this._context.set(ctx);
    this.persist(ctx);
  }

  setInstitution(institution: IInstitution) {
    const current = this._context();
    if(!current) return;

    this.setContext({
      ...current,
      institution
    });
  }

  clear() {
    this._context.set(null);
    localStorage.removeItem('app_context');
  }

  persist(ctx: IActiveContext) {
    localStorage.setItem('app_context', JSON.stringify(ctx));
  }

  loadFromStorage() {
    const data = localStorage.getItem('app_context');
    if(!data) return;

    this._context.set(JSON.parse(data));
  }

}