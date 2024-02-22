import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { RoomsMSG, UserInRoomMSG } from 'src/common/constants/rabbitmq';
import { ClientProxyChatRooms } from 'src/common/proxys/client.proxy';
import { RoomDTO } from './dtos/room.dto';

@Controller('api/v2/rooms')
export class RoomsController {
  constructor(private readonly _clientProxy: ClientProxyChatRooms){}
  private roomsProxy = this._clientProxy.ClientProxyRooms();
  
  @Get()
  FindRooms(){
    return this.roomsProxy.send(RoomsMSG.FIND_ALL, '');
  }

  @Post()
  createUser(@Body() roomDto: RoomDTO){
    return this.roomsProxy.send(RoomsMSG.CREATE, roomDto);
  }

  @Get(':id')
  findUser(@Param('id') id: string){
    return this.roomsProxy.send(RoomsMSG.FIND_ONE, id);
  }
  
  @Put('/:id')
  updateUser(@Param('id') id: string, @Body() roomDto: RoomDTO){
    return this.roomsProxy.send(RoomsMSG.UPDATE, { id, roomDto });
  }

  @Delete(':id')
  deleteUser(@Param('id') id: string){
    return this.roomsProxy.send(RoomsMSG.DELETE, id);
  }

  // Users in room
  @Get(':id/users-room')
  findUsersInRoom(@Param('id') roomID: string){
    return this.roomsProxy.send(UserInRoomMSG.FIND_ALL, roomID)
  }

  @Post(':id/users-room')
  addUserToRoom(@Param('id') roomID: string, @Body('userID') userID: string){
    return this.roomsProxy.send(UserInRoomMSG.ADD, { roomID, userID })
  }

  @Put(':id/users-room')
  removeUserInRoom(@Param('id') roomID: string, @Body('userID') userID: string){
    return this.roomsProxy.send(UserInRoomMSG.REMOVE, { roomID, userID })
  }

}
