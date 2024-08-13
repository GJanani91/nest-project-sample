import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class AppService {
  constructor(private readonly prismaService: PrismaService) {}

  async createUser() {
    return await this.prismaService.users.create({
      data: {
        name: 'Janani',
        email: 'janani@blackflux.in',
      },
    });
  }
  async deleteUser(data) {
    return await this.prismaService.users.update({
      where: {
        id: data?.id,
      },
      data: {
        archived: true,
      },
    });
  }

  getSampleHello(): string {
    return 'Hello Sample';
  }
}
