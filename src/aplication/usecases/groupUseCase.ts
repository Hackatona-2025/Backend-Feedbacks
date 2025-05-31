import { Injectable } from "@nestjs/common";
import { GroupRepository } from "src/domain/repositories/group.repository";
import { Group } from "src/domain/entities/group";
import { createGroupDTO } from "src/aplication/dtos/group/createGroupDTO";

@Injectable()
export class GroupUseCase {
    constructor(private readonly groupRepository: GroupRepository) {

    }

    createGroup(group: createGroupDTO): Promise<Group> {
        
    }

    findAll(): Promise<Group[]> {

    }

    findAllByParentId(parentId: string): Promise<Group[]> {

    }

    findById(id: string): Promise<Group> {

    }

    update(group: createGroupDTO): Promise<Group> {

    }

    delete(id: string): Promise<void> {

    }
}