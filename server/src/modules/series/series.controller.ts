import { Controller } from '@nestjs/common';
import { SeriesService } from './services/series.service';

@Controller('series')
export class SeriesController {
  constructor(private readonly seriesService: SeriesService) {}
  
}
