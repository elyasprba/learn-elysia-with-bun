import { Elysia } from 'elysia';
import { swagger } from '@elysiajs/swagger';
import { notesRouter } from './routes/notesRouter';

new Elysia()
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
  .listen(8000);

console.log('Note backend running on 8000');
