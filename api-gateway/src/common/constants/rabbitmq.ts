export enum AmqpQueues {
  usersQueue = "users",
  roomsQueue = "rooms"
}

export enum UsersMSG {
  CREATE = "CREATE_USER",
  FIND_ALL = "FIND_USERS",
  FIND_ONE = "FIND_USER",
  UPDATE = "UPDATE_USER",
  DELETE = "DELETE_USER",
  VALIDATE = "VALID_USER" 
}

export enum RoomsMSG {
  CREATE = "CREATE_ROOM",
  FIND_ALL = "FIND_ROOMS",
  FIND_ONE = "FIND_ROOM",
  UPDATE = "UPDATE_ROOM",
  DELETE = "DELETE_ROOM",
  VALIDATE = "VALID_ROOM" 
}

export enum UserInRoomMSG {
  ADD = "ADD_USER_ROOM",
  FIND_ALL = "FIND_USERS_ROOM",
  REMOVE = "DELETE_USER_ROOM",
  VALIDATE = "VALID_USER_ROOM" 
}