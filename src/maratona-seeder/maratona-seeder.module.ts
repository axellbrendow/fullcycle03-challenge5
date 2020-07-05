import { Logger, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Maratona } from '../maratona/maratona.entity';
import { MaratonaModule } from '../maratona/maratona.module';
import { MaratonaSeederService } from './maratona-seeder.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database.sqlite',
      entities: [Maratona],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Maratona]),
    MaratonaModule,
  ],
  providers: [MaratonaSeederService, Logger],
})
export class MaratonaSeederModule {}
