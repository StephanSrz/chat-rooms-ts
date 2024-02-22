import { Module } from '@nestjs/common';
import { RoomsController } from './rooms.controller';
import { ProxyModule } from 'src/common/proxys/proxy.module';

@Module({
  imports: [ProxyModule],
  controllers: [RoomsController]
})
export class RoomsModule {}
