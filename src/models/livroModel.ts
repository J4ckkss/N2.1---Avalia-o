import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();  

export const criarLivro = async (titulo: string, autor: string, anoPublicacao: number, genero: string) => {
  return prisma.livro.create({
    data: {
      titulo,
      autor,
      anoPublicacao,
      genero
    },
  });
};

export const listarLivros = async () => {
  return prisma.livro.findMany();
};

export const atualizarLivro = async (id: number, titulo: string, autor: string, anoPublicacao: number, genero: string) => {
  return prisma.livro.update({
    where: { id },
    data: { titulo, autor, anoPublicacao, genero }
  });
};

export const excluirLivro = async (id: number) => {
  return prisma.livro.delete({
    where: { id }
  });
};
