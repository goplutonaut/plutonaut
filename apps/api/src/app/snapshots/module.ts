import { Module } from '@nestjs/common';

import { SnapshotsController } from './controller.js';

@Module({
  controllers: [SnapshotsController],
})
export class SnapshotsModule {}
