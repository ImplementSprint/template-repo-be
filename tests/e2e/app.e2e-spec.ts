import { Test } from '@nestjs/testing';
import type { TestingModule } from '@nestjs/testing';
import type { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { AppModule } from '../../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.setGlobalPrefix('api');
    await app.init();
  });

  it('/api (GET)', () => {
    const httpServer = app.getHttpServer() as unknown as Parameters<
      typeof request
    >[0];

    return request(httpServer)
      .get('/api')
      .expect(200)
      .expect('Hello World!');
  });

  it('/api/health (GET)', () => {
    const httpServer = app.getHttpServer() as unknown as Parameters<
      typeof request
    >[0];

    return request(httpServer)
      .get('/api/health')
      .expect(200)
      .expect((res: { body: { status: string; uptimeSeconds: number } }) => {
        expect(res.body.status).toBe('ok');
        expect(typeof res.body.uptimeSeconds).toBe('number');
      });
  });
});
