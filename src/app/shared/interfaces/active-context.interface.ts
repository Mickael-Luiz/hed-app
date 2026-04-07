import { RoleEnum } from "../enums/role.enum";
import { IInstitution } from "../../core/domain/institution.interface";
import { IUser } from "../../core/domain/user.interface";

export interface IActiveContext {
    user: IUser
    institution: IInstitution
    role: RoleEnum
}