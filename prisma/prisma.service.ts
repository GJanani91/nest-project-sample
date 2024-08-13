import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
// import { SecretManagerService } from '../app/secret-manager.service';
// import * as fs from 'fs';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  constructor() {
    super();
  }

  // async getDatabaseUrl(): Promise<string> {
  //   const secretName =
  //     'projects/1094100429727/secrets/emmy-credential/versions/2';
  //   return this.secretManagerService.getSecretValue(secretName);
  // }

  // private prisma: PrismaClient;

  async onModuleInit(): Promise<void> {
    // const dbUrl = await this.getDatabaseUrl();
    // const stream = fs.createWriteStream('.env');
    // stream.once('open', function (fd) {
    //   stream.write(`DATABASE_URL='${dbUrl}'\n`);
    //   stream.end();
    // });

    // this.prisma = new PrismaClient({
    //   datasources: {
    //     db: {
    //       url: dbUrl,
    //     },
    //   },
    // });
    await this.$connect();
  }

  // getPrismaClient(): PrismaClient {
  //   return this.prisma;
  // }

  enableShutdownHooks(app: INestApplication): void {
    this.$on('beforeExit' as never, async () => {
      await app.close();
    });
  }
}
