import { ReactionType } from "src/domain/entities/reaction";

export interface ReactionDto {
  id:           string;
  feedbackId:   string;
  userId:       string;
  type:         ReactionType;
  createdAt:    Date;
}