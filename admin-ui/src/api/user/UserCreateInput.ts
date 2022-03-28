import { ProyectCreateNestedManyWithoutUsersInput } from "./ProyectCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  proyects?: ProyectCreateNestedManyWithoutUsersInput;
  roles: Array<string>;
  username: string;
};
