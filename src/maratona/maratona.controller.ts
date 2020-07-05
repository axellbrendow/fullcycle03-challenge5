import { Controller, Get, Post, Body } from '@nestjs/common';
import { MaratonaService } from './maratona.service';
import { Maratona } from './maratona.entity';

@Controller('maratona')
export class MaratonaController {
  constructor(private maratonaService: MaratonaService) {}

  @Get()
  public async index() {
    return await this.maratonaService.find();
  }

  @Post()
  public async create(@Body() maratona: Maratona) {
    return await this.maratonaService.create(maratona);
  }
}
