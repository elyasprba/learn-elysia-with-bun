import { Context, t } from 'elysia';

import { prisma } from '../utils/prisma';

export const notesSchema = {
  body: t.Object({
    content: t.String(),
  }),
};

export const getAllNotes = async ({ set }: Context) => {
  const notes = await prisma.notes.findMany();

  set.status = 200;
  return {
    data: notes,
  };
};

export const createNote = async ({ body, set }: Context) => {
  const { content } = body as { content: string };

  const newNote = await prisma.notes.create({
    data: {
      content,
    },
  });

  set.status = 201;
  return {
    data: newNote,
  };
};

export const getNoteById = async ({ set, params }: Context) => {
  const { id } = params;

  const note = await prisma.notes.findUnique({
    where: {
      id,
    },
  });

  set.status = 200;
  return {
    data: note,
  };
};

export const updateNote = async ({ params, body, set }: Context) => {
  const { id } = params;
  const { content } = body as { content: string };

  const note = await prisma.notes.update({
    where: {
      id,
    },
    data: {
      content,
    },
  });

  set.status = 200;
  return {
    data: note,
  };
};

export const deleteNote = async ({ params, set }: Context) => {
  const { id } = params;

  await prisma.notes.delete({
    where: {
      id,
    },
  });

  set.status = 200;
  return {
    message: 'Note deleted',
  };
};
