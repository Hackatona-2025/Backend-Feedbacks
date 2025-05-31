import { Injectable } from "@nestjs/common";
import { Group } from "../entities/group";

@Injectable()
export abstract class GroupRepository {
    abstract findAll(): Promise<Group[]>;
    abstract findAllByParentId(parentId: string): Promise<Group[]>;
    abstract findById(id: string): Promise<Group>;
    abstract create(group: Group): Promise<Group>;
    abstract update(group: Group): Promise<Group>;
    abstract delete(id: string): Promise<void>;
}
