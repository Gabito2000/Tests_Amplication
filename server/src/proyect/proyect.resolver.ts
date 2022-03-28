import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { ProyectResolverBase } from "./base/proyect.resolver.base";
import { Proyect } from "./base/Proyect";
import { ProyectService } from "./proyect.service";

@graphql.Resolver(() => Proyect)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class ProyectResolver extends ProyectResolverBase {
  constructor(
    protected readonly service: ProyectService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
