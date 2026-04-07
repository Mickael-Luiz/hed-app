import { Injectable, signal } from "@angular/core";
import { IUser } from "../../../shared/interfaces/IUser";

@Injectable({ providedIn: 'root' })
export class ContextStore {

  user = signal<IUser | null>(null);

  setUser(user: IUser) {
    this.user.set(user);
  }

  clear() {
    this.user.set(null);
  }
}