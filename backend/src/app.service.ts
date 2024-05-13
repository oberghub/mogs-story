import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  findOne(): string {
    return 'Hello World!';
  }

  findAll(): string {
    return 'Hello World!';
  }

  create(): string {
    return 'Hello World!';
  }

  update(): string {
    return 'Hello World!';
  }

  delete(): string {
    return 'Hello World!';
  }
}
