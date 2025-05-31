import { Group } from "src/domain/entities/group";
import { Group as PrismaGroup } from "@prisma/client";


export class GroupMapper {
    static toDomain(group: PrismaGroup): Group {
        return new Group({
            name: group.name,
            level: group.level,
            parentId: group.parentId ?? undefined
        }, group.id);
    }
    static toPrisma(group: Group): PrismaGroup {
        return {
            name: group.getName(),
            id: group.id,
            level: group.getLevel(),
            parentId: group.getParentId() ?? null
        };
    }
}