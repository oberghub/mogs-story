import content from './contentmodel';

export class UpdateStoryDto {
  readonly title?: string;
  readonly description?: string;
  readonly content?: content[];
  readonly categories?: string[];
}
