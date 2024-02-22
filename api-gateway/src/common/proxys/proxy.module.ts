import { Module } from "@nestjs/common";
import { ClientProxyChatRooms } from "./client.proxy";
import { ConfigService, ConfigModule } from "@nestjs/config";

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env.development',
      isGlobal: true,
    }),
  ],
  providers: [ClientProxyChatRooms, ConfigService],
  exports: [ClientProxyChatRooms]
})
export class ProxyModule{}