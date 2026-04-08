import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateFn, Router } from "@angular/router";
import { ContextStore } from "../state/context/context.store";
import { RoleEnum } from "../../shared/enums/role.enum";

export const authGuard: CanActivateFn = (route: ActivatedRouteSnapshot) => {

  const context = inject(ContextStore);
  const router = inject(Router);

  const user = context.user();
  const role = context.role();

  if (!user) {
    return router.createUrlTree(['/login']);
  }

  const allowedRoles = route.data?.['roles'] as RoleEnum[] | undefined;

  if (!allowedRoles || allowedRoles.length === 0) {
    return true;
  }

  if (!role || !allowedRoles.includes(role)) {
    return router.createUrlTree(['/unauthorized']);
  }

  return true;

}