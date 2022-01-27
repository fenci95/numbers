import { Injectable, NestMiddleware, Logger } from '@nestjs/common';

import { Request, Response, NextFunction } from 'express';

@Injectable()
export class AppLoggerMiddleware implements NestMiddleware {
  private logger = new Logger('HTTP');

  use(request: Request, response: Response, next: NextFunction): void {
    console.log(request.baseUrl);
    console.log(request.cookies);
    console.log(request.headers);
    console.log(request.hostname);
    console.log(request.method);
    console.log(request.originalUrl);
    console.log(request.params);
    console.log(request.rawHeaders);
    console.log(request.statusCode);
    next();
  }
}
