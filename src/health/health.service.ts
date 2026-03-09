import { Injectable } from '@nestjs/common';

export type HealthStatus = 'ok';

export interface HealthResponse {
  status: HealthStatus;
  uptimeSeconds: number;
}

@Injectable()
export class HealthService {
  getStatus(): HealthResponse {
    return {
      status: 'ok',
      uptimeSeconds: Math.floor(process.uptime()),
    };
  }
}
