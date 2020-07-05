import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MaratonaController } from './maratona.controller';
import { MaratonaService } from './maratona.service';
import { Maratona } from './maratona.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Maratona])],
  exports: [MaratonaService],
  controllers: [MaratonaController],
  providers: [MaratonaService],
})
export class MaratonaModule {}
