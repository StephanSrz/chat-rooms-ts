import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UsersMSG } from 'src/common/constants/rabbitmq';
import { ClientProxyChatRooms } from 'src/common/proxys/client.proxy';
import { UsersDTO } from './dtos/users.dto';

@Controller('/api/v2/users')
export class UserssController {
  constructor( private readonly _clientProxy: ClientProxyChatRooms) {}
  private userProxy = this._clientProxy.ClientProxyUsers();

  @Get()
  FindUsers(){
    return this.userProxy.send(UsersMSG.FIND_ALL, '');
  }

  @Post()
  createUser(@Body() userDto: UsersDTO){
    return this.userProxy.send(UsersMSG.CREATE, userDto);
  }

  @Get(':id')
  findUser(@Param('id') id: string){
    return this.userProxy.send(UsersMSG.FIND_ONE, id);
  }
  
  @Put('/:id')
  updateUser(@Param('id') id: string, @Body() userDto: UsersDTO){
    return this.userProxy.send(UsersMSG.UPDATE, { id, userDto });
  }

  @Delete(':id')
  deleteUser(@Param('id') id: string){
    return this.userProxy.send(UsersMSG.DELETE, id);
  }
}
