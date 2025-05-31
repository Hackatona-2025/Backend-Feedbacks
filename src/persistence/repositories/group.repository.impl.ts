import { Injectable } from "@nestjs/common";
import { Group } from "src/domain/entities/group";
import { GroupRepository } from "src/domain/repositories/group.repository";
import { PrismaService } from "src/persistence/config/prisma-service";

@Injectable()
export class PrismaGroupRepository implements GroupRepository {
    constructor(private readonly prisma: PrismaService) {}
    async findAll(): Promise<Group[]> {
        return await this.prisma.group.findMany();
    }
    async findAllByParentId(parentId: string): Promise<Group[]> {
        return await this.prisma.group.findMany({
            where: {
                parentId: parentId
            }
        });
    }
    async findById(id: string): Promise<Group> {
        return await this.prisma.group.findUnique({
            where: {id: id}});
    }
    async create(group: Group): Promise<Group> {
        return await this.prisma.group.create({data: group});
    }
    async update(group: Group): Promise<Group> {
        return await this.prisma.group.update({
            where: {
                id: group.id
            },
            data: group
        });
    }
    async delete(id: string): Promise<void> {
        return await this.prisma.group.delete({
            where: {
                id: id
            }
        });
    }

}
