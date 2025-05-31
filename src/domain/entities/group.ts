import { User } from "./user";

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

  constructor() {
    this.subGroups = [];
    this.feedbacks = [];
    this.users = [];
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

  getSubGroups(): Group[] {
    return this.subGroups;
  }

  setSubGroups(value: Group[]) {
    this.subGroups = value;
  }

  getFeedbacks(): Feedbacks[] {
    return this.feedbacks;
  }

  setFeedbacks(value: Feedbacks[]) {
    this.feedbacks = value;
  }

  getUsers(): User[] {
    return this.users;
  }

  setUsers(value: User[]) {
    this.users = value;
  }

  toJSON() {
    return {
      id: this.id,
      name: this.name,
      level: this.level,
      parentId: this.parentId,
      subGroups: this.subGroups.map(group => typeof group === 'object' && 'toJSON' in group ? group.toJSON() : group),
      feedbacks: this.feedbacks.map(feedback => typeof feedback === 'object' && 'toJSON' in feedback ? feedback.toJSON() : feedback),
      users: this.users.map(user => typeof user === 'object' && 'toJSON' in user ? user.toJSON() : user)
    };
  }
}




