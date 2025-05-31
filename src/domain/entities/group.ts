<<<<<<< HEAD
import { User } from "./user";
=======
import { createId } from "@paralleldrive/cuid2"
>>>>>>> 80b221fd655df083b683123a5f2f2454f9f8b74f

interface GroupInterface {
  id: string;
  name: string;
  level: number;
  parentId: string;
  subGroups?: Group[];
}


export class Group implements GroupInterface {
  id: string;
  name: string;
  level: number;
  parentId: string;

  constructor(group: GroupInterface, id?: string) {
    this.id = id || createId();
    this.name = group.name;
    this.level = group.level;
    this.parentId = group.parentId;
  }

  getId(): string {
    return this.id;
  }

  setId(value: string) {
    this.id = value;
  }

  getName(): string {
    return this.name;
  }

  setName(value: string) {
    this.name = value;
  }

  getLevel(): number {
    return this.level;
  }

  setLevel(value: number) {
    this.level = value;
  }

  getParentId(): string {
    return this.parentId;
  }

  setParentId(value: string) {
    this.parentId = value;
  }


  toJSON() {
    return {
      id: this.id,
      name: this.name,
      level: this.level,
      parentId: this.parentId,
    };
  }
}




