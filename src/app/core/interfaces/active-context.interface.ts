import { RoleEnum } from "../../shared/enums/role.enum";
import { IInstitution } from "./institution.interface";
import { IUser } from "./user.interface";
import { IUserInstution } from "./user-institution.interface";

export interface IActiveContext {
    user: IUser
    institutions: IUserInstution[]
    activeInstitution: IUserInstution;
}