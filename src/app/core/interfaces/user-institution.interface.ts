import { RoleEnum } from "../../shared/enums/role.enum";
import { IInstitution } from "./institution.interface";

export interface IUserInstution {
  institution: IInstitution
  role: RoleEnum
}