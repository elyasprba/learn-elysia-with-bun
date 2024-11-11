import { Elysia } from 'elysia';
import { swagger } from '@elysiajs/swagger';
import { notesRouter } from './routes/notesRouter';

const port = process.env.PORT || 8000;

export const app = new Elysia()
  .use(
    swagger({
      path: '/docs',
      version: '1.0.0',
    })
  )
  .get('/ping', ({ set }) => {
    set.status = 200;
    return {
      message: 'pong',
    };
  })
  .use(notesRouter)
  .listen(port);

console.log('Note backend running on 8000');
