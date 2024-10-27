import { Elysia } from 'elysia';
import {
  createNote,
  deleteNote,
  getAllNotes,
  getNoteById,
  notesSchema,
  updateNote,
} from '../controllers/notesController';

export const notesRouter = new Elysia().group('/api/v1/notes', (app) =>
  app
    .get('/', getAllNotes)
    .post('/', createNote, notesSchema)
    .get('/:id', getNoteById)
    .patch('/:id', updateNote, notesSchema)
    .delete('/:id', deleteNote)
);
