import { Proyect } from "../proyect/Proyect";

export type User = {
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastName: string | null;
  proyects?: Array<Proyect>;
  roles: Array<string>;
  updatedAt: Date;
  username: string;
};
