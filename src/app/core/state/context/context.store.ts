import { computed, Injectable, signal } from "@angular/core";
import { IUser } from "../../interfaces/user.interface";
import { IActiveContext } from "../../interfaces/active-context.interface";
import { IInstitution } from "../../interfaces/institution.interface";

@Injectable({ providedIn: 'root' })
export class ContextStore {

  private _context = signal<IActiveContext | null>(null);
  context = this._context.asReadonly();

  user = computed(() => this._context()?.user ?? null);
  activeInstitution = computed(() => this._context()?.activeInstitution ?? null);
  institutions = computed(() => this._context()?.institutions ?? []);

  setContext(ctx: IActiveContext) {
    this._context.set(ctx);
    this.persist(ctx);
  }

  setActiveInstitution(institutionId: string) {

    const current = this._context();
    
    if(!current) return;

    const found = current.institutions.find(i => i.institution.id == institutionId);

    if (!found) return;

    this.setContext({
      ...current,
      activeInstitution: found
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