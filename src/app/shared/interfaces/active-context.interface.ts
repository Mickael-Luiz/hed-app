import { RoleEnum } from "../enums/role.enum";
import { IInstitution } from "./institution.interface";
import { IUser } from "./user.interface";

export interface IActiveContext {
    user: IUser
    institution: IInstitution
    role: RoleEnum
}