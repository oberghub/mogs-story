import content from './contentmodel';

export class UpdateStoryDto {
  readonly title?: string;
  readonly description?: string;
  readonly img_title?: string;
  readonly img_caption?: string;
  readonly content?: content[];
  readonly categories?: string[];
}
