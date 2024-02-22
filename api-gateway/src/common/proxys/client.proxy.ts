import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config"
import { ClientProxy, ClientProxyFactory, Transport } from "@nestjs/microservices";
import { AmqpQueues } from "../constants/rabbitmq";

@Injectable()
export class ClientProxyChatRooms{
  constructor(private readonly config: ConfigService){}

  ClientProxyUsers(): ClientProxy{
    return ClientProxyFactory.create({
      transport: Transport.RMQ,
      options: {
        urls: this.config.get("RABBITMQ_URL"),
        queue: AmqpQueues.usersQueue,
      }
    })
  }
  
  ClientProxyRooms(): ClientProxy{
    return ClientProxyFactory.create({
      transport: Transport.RMQ,
      options: {
        urls: this.config.get("RABBITMQ_URL"),
        queue: AmqpQueues.roomsQueue,
      }
    })
  }

}