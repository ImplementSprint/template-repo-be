import { Test } from '@nestjs/testing';
import type { TestingModule } from '@nestjs/testing';
import { HealthController } from './health.controller';
import { HealthService } from './health.service';

describe('HealthController', () => {
  let controller: HealthController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HealthController],
      providers: [HealthService],
    }).compile();

    controller = module.get<HealthController>(HealthController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return service health status', () => {
    const response = controller.getHealth();

    expect(response.status).toBe('ok');
    expect(typeof response.uptimeSeconds).toBe('number');
    expect(response.uptimeSeconds).toBeGreaterThanOrEqual(0);
  });
});
