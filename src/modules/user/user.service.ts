import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { CreateUserInputDto } from './dto/create-user-input.dto';
import { plainToClass } from 'class-transformer';
import { CreateUserOutputDto } from './dto/create-user-output.dto';
import { UpdateUserInputDto } from './dto/update-user-input.dto';
import { UpdateUserOutputDto } from './dto/update-user-output.dto';
import { NotFoundException } from '@nestjs/common';
import { GetUserOutputDto } from './dto/get-user-output.dto';
import { UserRepository } from './user.repository';
import { DeleteUserOutputDto } from './dto/delete-user-output.dto';

@Injectable()
export class UserService {
    constructor(private userRepository: UserRepository) {}

    async getUser(id: string): Promise<GetUserOutputDto> {
        try {
            const existedUser = await this.userRepository.getUser(id);
            if (!existedUser) throw new NotFoundException('User not found');

            return plainToClass(GetUserOutputDto, existedUser);
        } catch (error) {
            throw new InternalServerErrorException(error);
        }
    }

    async createUser(user: CreateUserInputDto): Promise<CreateUserOutputDto> {
        try {
            const newUuid = uuidv4();

            const createdUser = this.userRepository.createUser(newUuid, user);

            return plainToClass(CreateUserOutputDto, createdUser);
        } catch (error) {
            throw new InternalServerErrorException(error);
        }
    }

    async updateUser(id: string, user: UpdateUserInputDto): Promise<UpdateUserOutputDto> {
        try {
            const existedUser = await this.userRepository.getUser(id);
            if (!existedUser) throw new NotFoundException('User not found');

            const updatedUser = await this.userRepository.updateUser(id, user);

            return plainToClass(UpdateUserOutputDto, updatedUser);
        } catch (error) {
            throw new InternalServerErrorException(error);
        }
    }

    async deleteUser(id: string) {
        try {
            const deletingUser = await this.userRepository.getUser(id);
            if (!deletingUser) throw new NotFoundException('User not exist');

            const deletedUser = await this.userRepository.deleteUser(id);

            return plainToClass(DeleteUserOutputDto, deletedUser);
        } catch (error) {
            throw new InternalServerErrorException(error);
        }
    }
}
