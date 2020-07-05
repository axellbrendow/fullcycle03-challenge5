import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Maratona } from '../maratona/maratona.entity';
import { MaratonaService } from '../maratona/maratona.service';

const marathonClasses = [
  {
    id: 1,
    name: 'Full Cycle e Estudo de caso',
    link: 'http://maratona.fullcycle.com.br/aula/full-cycle-e-estudo-de-caso/',
  },
  {
    id: 2,
    name: 'Microsserviço de assinaturas com RabbitMQ e Golang Buffalo',
    link: 'http://maratona.fullcycle.com.br/aula/aula-2/',
  },
  {
    id: 3,
    name: 'Serverless framework e processamento de pagamentos',
    link:
      'http://maratona.fullcycle.com.br/aula/serverless-framework-e-processamento-de-pagamentos/',
  },
  {
    id: 4,
    name: 'Multi-tenancy applications com Django',
    link:
      'http://maratona.fullcycle.com.br/aula/multi-tenancy-applications-com-django/',
  },
  {
    id: 5,
    name: 'Ecommerce com Nest.js, Loopback e ElasticSearch',
    link:
      'http://maratona.fullcycle.com.br/aula/ecommerce-com-nestjs-loopback-e-elasticsearch/',
  },
  {
    id: 6,
    name: 'Microsserviços com Docker e Kubernetes',
    link: '',
  },
];

@Injectable()
export class MaratonaSeederService {
  constructor(
    @InjectRepository(Maratona)
    private maratonaRepository: Repository<Maratona>,
    private maratonaService: MaratonaService,
    private readonly logger: Logger,
  ) {}

  public async seed() {
    this.logger.debug('Starting seed ...');
    const promises = marathonClasses.map(marathonClass =>
      this.maratonaService.create(
        this.maratonaRepository.create(marathonClass),
      ),
    );
    await Promise.all(promises);
    this.logger.debug('Finishing seed ... (OK)');
  }
}
