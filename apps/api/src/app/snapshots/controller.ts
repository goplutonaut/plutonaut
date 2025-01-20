import { Controller, Get, StreamableFile } from '@nestjs/common';

import { pgDump } from './pg.js';

@Controller()
export class SnapshotsController {
  @Get('/snapshot')
  export(): StreamableFile {
    const child = pgDump();

    return new StreamableFile(child.stdout, {
      type: 'text/plain',
      disposition: 'attachment; filename="snapshot.sql"',
    });
  }
}
