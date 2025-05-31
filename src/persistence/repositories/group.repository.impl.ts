import { Injectable } from "@nestjs/common";
import { Group } from "src/domain/entities/group";
import { GroupRepository } from "src/domain/repositories/group.repository";
import { PrismaService } from "src/persistence/config/prisma-service";
import { GroupMapper } from "src/persistence/mappers/group.mappers";

@Injectable()
export class PrismaGroupRepository implements GroupRepository {
    constructor(private readonly prisma: PrismaService) {}

    async findAll(): Promise<Group[]> {
        const groups = await this.prisma.group.findMany();
        return groups.map(group => GroupMapper.toDomain(group));
    }

    async findAllByParentId(parentId: string): Promise<Group[]> {
        const groups = await this.prisma.group.findMany({
            where: { parentId },
        });
        return groups.map(group => GroupMapper.toDomain(group));
    }

    async findById(id: string): Promise<Group> {
        const group = await this.prisma.group.findUnique({
            where: { id },
        });
        if (!group) {
            throw new Error(`Group with id ${id} not found`);
        }
        return GroupMapper.toDomain(group);
    }

    async create(group: Group): Promise<Group> {
        const created = await this.prisma.group.create({
            data: GroupMapper.toPrisma(group),
        });
        return GroupMapper.toDomain(created);
    }

    async update(group: Group): Promise<Group> {
        const updated = await this.prisma.group.update({
            where: { id: group.id },
            data: GroupMapper.toPrisma(group),
        });
        return GroupMapper.toDomain(updated);
    }

    async delete(id: string): Promise<void> {
        await this.prisma.group.delete({
            where: { id },
        });
    }
}
