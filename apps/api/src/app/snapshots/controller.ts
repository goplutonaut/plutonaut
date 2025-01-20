import { Controller, Get, StreamableFile } from '@nestjs/common';

import { pgDump } from './pg';

@Controller()
export class SnapshotsController {
  @Get('/snapshot')
  export(): StreamableFile {
    const child = pgDump();

    return new StreamableFile(child.stdout);
  }
}
