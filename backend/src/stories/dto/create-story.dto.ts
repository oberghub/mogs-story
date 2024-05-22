import content from "./contentmodel";

export class CreateStoryDto {
  readonly title: string;
  readonly description: string;
  readonly img_title: string;
  readonly img_caption: string;
  readonly author: string;
  readonly byUserId: string;
  readonly publishDate: string;
  readonly content: content[];
  readonly categories: string[];
}
