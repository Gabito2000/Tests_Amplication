import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ProyectListRelationFilter } from "../proyect/ProyectListRelationFilter";

export type UserWhereInput = {
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  proyects?: ProyectListRelationFilter;
  username?: StringFilter;
};
