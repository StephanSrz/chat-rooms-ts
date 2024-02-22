import { Module } from '@nestjs/common';
import { UserssController } from './users.controller';
import { ProxyModule } from 'src/common/proxys/proxy.module';

@Module({
  imports: [ProxyModule],
  controllers: [UserssController]
})
export class UsersModule {}
