"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.excluirLivroPorId = exports.atualizarLivroPorId = exports.listarTodosLivros = exports.cadastrarLivro = void 0;
const livroModel_1 = require("../models/livroModel");
// Função para cadastrar livro
const cadastrarLivro = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { titulo, autor, anoPublicacao, genero } = req.body;
    try {
        const livro = yield (0, livroModel_1.criarLivro)(titulo, autor, anoPublicacao, genero);
        res.status(201).json(livro);
    }
    catch (error) {
        res.status(500).json({ error: 'Erro ao cadastrar livro' });
    }
});
exports.cadastrarLivro = cadastrarLivro;
// Função para listar todos os livros
const listarTodosLivros = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const livros = yield (0, livroModel_1.listarLivros)();
        res.status(200).json(livros);
    }
    catch (error) {
        res.status(500).json({ error: 'Erro ao listar livros' });
    }
});
exports.listarTodosLivros = listarTodosLivros;
// Função para atualizar livro
const atualizarLivroPorId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { titulo, autor, anoPublicacao, genero } = req.body;
    try {
        const livro = yield (0, livroModel_1.atualizarLivro)(Number(id), titulo, autor, anoPublicacao, genero);
        res.status(200).json(livro);
    }
    catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar livro' });
    }
});
exports.atualizarLivroPorId = atualizarLivroPorId;
// Função para excluir livro
const excluirLivroPorId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        yield (0, livroModel_1.excluirLivro)(Number(id));
        res.status(200).json({ message: 'Livro excluído com sucesso' });
    }
    catch (error) {
        res.status(500).json({ error: 'Erro ao excluir livro' });
    }
});
exports.excluirLivroPorId = excluirLivroPorId;
