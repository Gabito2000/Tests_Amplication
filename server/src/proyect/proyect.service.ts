import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { ProyectServiceBase } from "./base/proyect.service.base";

@Injectable()
export class ProyectService extends ProyectServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
