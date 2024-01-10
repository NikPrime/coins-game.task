import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserInputDto } from './dto/create-user-input.dto';
import { UpdateUserInputDto } from './dto/update-user-input.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { GetUserOutputDto } from './dto/get-user-output.dto';
import { CreateUserOutputDto } from './dto/create-user-output.dto';
import { UpdateUserOutputDto } from './dto/update-user-output.dto';
import { DeleteUserOutputDto } from './dto/delete-user-output.dto';

@ApiTags('User')
@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @ApiOperation({
        operationId: 'getUser',
        summary: 'get user by id',
    })
    @ApiResponse({
        status: 200,
        description: 'Get user success',
        type: GetUserOutputDto,
    })
    @Get(':id')
    async getUser(@Param('id') id: string) {
        return this.userService.getUser(id);
    }

    @ApiOperation({
        operationId: 'createUser',
        summary: 'create user',
    })
    @ApiResponse({
        status: 200,
        description: 'Create user success',
        type: CreateUserOutputDto,
    })
    @Post()
    async createUser(@Body() user: CreateUserInputDto) {
        return this.userService.createUser(user);
    }

    @ApiOperation({
        operationId: 'updateUser',
        summary: 'update user by id',
    })
    @ApiResponse({
        status: 200,
        description: 'Update user success',
        type: UpdateUserOutputDto,
    })
    @Patch(':id')
    async updateUser(@Param('id') id: string, @Body() user: UpdateUserInputDto) {
        return this.userService.updateUser(id, user);
    }

    @ApiOperation({
        operationId: 'deleteUser',
        summary: 'delete user by id',
    })
    @ApiResponse({
        status: 200,
        description: 'Update user success',
        type: DeleteUserOutputDto,
    })
    @Delete(':id')
    async deleteUser(@Param('id') id: string) {
        return this.userService.deleteUser(id);
    }
}
