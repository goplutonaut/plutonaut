import { Module } from '@nestjs/common';

import { SnapshotsController } from './controller';

@Module({
  controllers: [SnapshotsController],
})
export class SnapshotsModule {}
