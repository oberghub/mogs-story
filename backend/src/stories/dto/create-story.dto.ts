import content from "./contentmodel";

export class CreateStoryDto {
  readonly title: string;
  readonly description: string;
  readonly author: string;
  readonly byUserId: string;
  readonly publishDate: string;
  readonly content: content[];
  readonly categories: string[];
}
