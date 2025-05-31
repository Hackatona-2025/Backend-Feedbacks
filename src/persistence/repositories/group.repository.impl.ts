import { Injectable } from "@nestjs/common";
import { Group } from "src/domain/entities/group";
import { GroupRepository } from "src/domain/repositories/group.repository";

@Injectable()
export class GroupRepositoryImpl implements GroupRepository {
    findAll(): Promise<Group[]> {
        
    }
    findAllByParentId(parentId: string): Promise<Group[]> {

    }
    findById(id: string): Promise<Group> {
        
    }
    create(group: Group): Promise<Group> {
        
    }
    update(group: Group): Promise<Group> {
        
    }
    delete(id: string): Promise<void> {
        
    }

}
