import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../db/prisma/prisma.service';
import { CreateUserInputDto } from './dto/create-user-input.dto';
import { UpdateUserInputDto } from './dto/update-user-input.dto';

@Injectable()
export class UserRepository {
    constructor(private prisma: PrismaService) {}

    getUser(id: string) {
        return this.prisma.user.findUnique({
            where: { id },
        });
    }

    getAllUsers() {
        return this.prisma.user.findMany();
    }

    createUser(id: string, user: CreateUserInputDto) {
        return this.prisma.user.create({
            data: {
                id,
                ...user,
            },
        });
    }

    updateUser(id: string, user: UpdateUserInputDto) {
        return this.prisma.user.update({
            where: { id },
            data: user,
        });
    }

    deleteUser(id: string) {
        return this.prisma.user.delete({
            where: {
                id,
            },
        });
    }
}
