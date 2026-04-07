import { RoleEnum } from "../enums/Role";
import { IInstitution } from "./IInstitution";
import { IUser } from "./IUser";

export interface IActiveContext {
    user: IUser
    institution: IInstitution
    role: RoleEnum
}