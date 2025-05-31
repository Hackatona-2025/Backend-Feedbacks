import { createId } from '@paralleldrive/cuid2';

interface FeedbackInterface {
  content: string;
  file?: string;
  authorId: string;
  groupId?: string;
  isAnonymous: boolean;
  recepentId?: string;
}

export class Feedback {
  id: string;
  content: string;
  file?: string;
  createdAt: Date;
  reportCount: number;
  authorId: string;
  recepentId?: string; // Assuming this is for future use, if needed
  groupId?: string;
  isAnonymous: boolean;
  reactions: string[]; // Replace 'any' with your Reaction type if available

  constructor(feedback: FeedbackInterface, id?: string) {
    this.id = id || createId();
    this.content = feedback.content;
    this.file = feedback.file;
    this.createdAt = new Date();
    this.reportCount = 0;
    this.authorId = feedback.authorId;
    this.groupId = feedback.groupId;
    this.isAnonymous = feedback.isAnonymous;
    this.reactions = [];
    this.recepentId = feedback.recepentId; // Optional, can be undefined
  }
  
  getId(): string {
    return this.id;
  }

  setId(id: string): void {
    this.id = id;
  }

  getContent(): string {
    return this.content;
  }

  setContent(content: string): void {
    this.content = content;
  }

  getFile(): string | undefined {
    return this.file;
  }

  setFile(file: string | undefined): void {
    this.file = file;
  }

  getCreatedAt(): Date {
    return this.createdAt;
  }

  setCreatedAt(date: Date): void {
    this.createdAt = date;
  }

  getReportCount(): number {
    return this.reportCount;
  }

  setReportCount(count: number): void {
    this.reportCount = count;
  }

  getAuthorId(): string {
    return this.authorId;
  }

  setAuthorId(authorId: string): void {
    this.authorId = authorId;
  }

  getGroupId(): string | undefined {
    return this.groupId;
  }

  setGroupId(groupId: string | undefined): void {
    this.groupId = groupId;
  }

  getIsAnonymous(): boolean {
    return this.isAnonymous;
  }

  setIsAnonymous(isAnonymous: boolean): void {
    this.isAnonymous = isAnonymous;
  }

  getReactions(): any[] {
    return this.reactions;
  }

  setReactions(reactions: any[]): void {
    this.reactions = reactions;
  }

  toJson() {
    return {
      id: this.id,
      content: this.content,
      file: this.file,
      createdAt: this.createdAt.toISOString(),
      reportCount: this.reportCount,
      authorId: this.authorId,
      groupId: this.groupId,
      isAnonymous: this.isAnonymous,
      reactions: this.reactions,
    };
  }



    
}