import { Inject, Injectable } from "@nestjs/common";
import { GroupRepository } from "src/domain/repositories/group.repository";
import { Group } from "src/domain/entities/group";
import { createGroupDTO } from "src/aplication/dtos/group/createGroupDTO";
import { GroupDTO } from "src/aplication/dtos/group/groupDTO";
@Injectable()
export class GroupUseCase {
    constructor(
        @Inject('GroupRepository')
        private readonly groupRepository: GroupRepository) {

    }

    createGroup(group: createGroupDTO): Promise<Group> {
        const newGroup = new Group({
            name: group.name,
            level: group.level,
            parentId: group.parentId
        });
        return this.groupRepository.create(newGroup);
    }

    findAll(): Promise<Group[]> {
        return this.groupRepository.findAll();
    }

    findAllByParentId(parentId: string): Promise<Group[]> {
        if (!parentId) {
            throw new Error("Parent ID is required");
        }
        return this.groupRepository.findAllByParentId(parentId);
    }

    findById(id: string): Promise<Group> {
        if (!id) {
            throw new Error("Group ID is required");
        }
        return this.groupRepository.findById(id);
    }

    update(group: GroupDTO): Promise<Group> {
        if (!group || !group.id) {
            throw new Error("Group ID is required for update");
        }
        const groupEntity = new Group({
            name: group.name,
            level: group.level,
            parentId: group.parentId
        }, group.id);
        return this.groupRepository.update(groupEntity);
    }

    delete(id: string): Promise<void> {
        if (!id) {
            throw new Error("Group ID is required for deletion");
        }
        return this.groupRepository.delete(id);
    }
}