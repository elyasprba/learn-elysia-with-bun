import { describe, expect, it } from 'bun:test';
import { app } from '..';

const endpoint = process.env.LOCAL;

describe('/notes endpoint', () => {
  it('should respond with status 200', async () => {
    const response = await app.handle(
      new Request(`${endpoint}/api/v1/notes`, {
        method: 'GET',
      })
    );

    const result = await response.json();

    expect(response.status).toBe(200);

    if (result.data.length > 0) {
      expect(result.data[0]).toBeDefined();
      expect(result.data[0]).toBeDefined();
    }
  });
});
