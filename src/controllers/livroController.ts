import { Request, Response } from 'express';
import { criarLivro, listarLivros, atualizarLivro, excluirLivro } from '../models/livroModel';

export const cadastrarLivro = async (req: Request, res: Response) => {
  const { titulo, autor, anoPublicacao, genero } = req.body;

  try {
    const livro = await criarLivro(titulo, autor, anoPublicacao, genero);
    res.status(201).json(livro);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao cadastrar livro' });
  }
};

export const listarTodosLivros = async (req: Request, res: Response) => {
  try {
    const livros = await listarLivros();
    res.status(200).json(livros);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao listar livros' });
  }
};

export const atualizarLivroPorId = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { titulo, autor, anoPublicacao, genero } = req.body;

  try {
    const livro = await atualizarLivro(Number(id), titulo, autor, anoPublicacao, genero);
    res.status(200).json(livro);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar livro' });
  }
};

export const excluirLivroPorId = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    await excluirLivro(Number(id));
    res.status(200).json({ message: 'Livro excluído com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao excluir livro' });
  }
};
