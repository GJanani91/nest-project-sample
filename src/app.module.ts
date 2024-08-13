import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SampleController } from './sample.controller';
import { PrismaAppModule } from 'prisma/prisma.module';

@Module({
  imports: [PrismaAppModule],
  controllers: [AppController, SampleController],
  providers: [AppService],
})
export class AppModule {}
