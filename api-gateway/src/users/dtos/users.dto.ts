import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty, IsString, IsEmail } from "class-validator"

export class UsersDTO{
  @ApiProperty()
  @IsNotEmpty({message: "Name can not be empty"})
  @IsString({message: "Name must be a string"})
  name: string
  
  @ApiProperty()
  @IsNotEmpty({message: "Email can not be empty"})
  @IsString({message: "Email must be a string"})
  @IsEmail()
  email: string
  
  @ApiProperty()
  @IsNotEmpty({message: "User Name can not be empty"})
  @IsString({message: "User Name must be a string"})
  userName: string
  
  @ApiProperty()
  @IsNotEmpty({message: "Password can not be empty"})
  @IsString({message: "Password must be a string"})
  password: string
}