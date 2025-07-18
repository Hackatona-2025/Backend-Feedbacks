
import { createId } from "@paralleldrive/cuid2"


interface GroupInterface {
  name: string;
  level: number;
  parentId?: string;
}


export class Group {
  id: string;
  name: string;
  level: number;
  parentId: string | undefined;

  constructor(group: GroupInterface, id?: string) {
    this.id = id || createId();
    this.name = group.name;
    this.level = group.level;
    this.parentId = group.parentId ?? undefined;
  }

  public getId(): string {
    return this.id;
  }

  public setId(value: string) {
    this.id = value;
  }

  public getName(): string {
    return this.name;
  }

  public setName(value: string) {
    this.name = value;
  }

  public getLevel(): number {
    return this.level;
  }

  public setLevel(value: number) {
    this.level = value;
  }

  public getParentId(): string | undefined {
    return this.parentId;
  }

  public setParentId(value: string) {
    this.parentId = value;
  }


  public toJSON() {
    return {
      id: this.id,
      name: this.name,
      level: this.level,
      parentId: this.parentId,
    };
  }
}




