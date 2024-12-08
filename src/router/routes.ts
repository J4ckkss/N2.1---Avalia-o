import express from 'express';
import { cadastrarLivro, listarTodosLivros, atualizarLivroPorId, excluirLivroPorId } from '../controllers/livroController';

const router = express.Router();

router.post('/livros', cadastrarLivro);   // Criar livro
router.get('/livros', listarTodosLivros); // Listar livros
router.put('/livros/:id', atualizarLivroPorId); // Atualizar livro
router.delete('/livros/:id', excluirLivroPorId); // Excluir livro

export default router;
