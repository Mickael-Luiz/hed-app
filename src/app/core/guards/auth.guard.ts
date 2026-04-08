import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { ContextStore } from "../state/context/context.store";

export const authGuard: CanActivateFn = () => {
  
  const context = inject(ContextStore);
  const router = inject(Router);

  const user = context.user();

  if (user) {
    return true;
  }

  return router.createUrlTree(['/login']);
}