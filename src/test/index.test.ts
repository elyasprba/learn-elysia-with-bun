import { describe, expect, it } from 'bun:test';
import { app } from '..';

const endpoint = process.env.LOCAL;

describe('GET /ping endpoint', () => {
  it('should respond with status 200 and message "pong"', async () => {
    const response = await app.handle(
      new Request(`${endpoint}/ping`, {
        method: 'GET',
      })
    );

    const res = await response.json();

    expect(response.status).toBe(200);
    expect(res.message).toBe('pong');
  });
});
