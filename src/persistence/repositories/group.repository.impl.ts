import { Injectable } from "@nestjs/common";
import { Group } from "src/domain/entities/group";
import { GroupRepository } from "src/domain/repositories/group.repository";
import { PrismaService } from "src/persistence/config/prisma-service";
import { GroupMapper } from "src/persistence/mappers/group.mappers";

@Injectable()
export class PrismaGroupRepository implements GroupRepository {
    constructor(private readonly prisma: PrismaService) {}

    async findAll(): Promise<Group[]> {
        
    }

    async findAllByParentId(parentId: string): Promise<Group[]> {
        
    }

    async findById(id: string): Promise<Group | null> {
        
    }

    async create(group: Group): Promise<Group> {
       
    }

    async update(group: Group): Promise<Group> {
        
    }

    async delete(id: string): Promise<void> {
        
    }
}
