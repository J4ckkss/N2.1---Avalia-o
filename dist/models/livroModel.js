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
exports.excluirLivro = exports.atualizarLivro = exports.listarLivros = exports.criarLivro = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient(); // Criando uma instância do Prisma Client
// Função para criar um livro
const criarLivro = (titulo, autor, anoPublicacao, genero) => __awaiter(void 0, void 0, void 0, function* () {
    return prisma.livro.create({
        data: {
            titulo,
            autor,
            anoPublicacao,
            genero
        },
    });
});
exports.criarLivro = criarLivro;
// Função para listar todos os livros
const listarLivros = () => __awaiter(void 0, void 0, void 0, function* () {
    return prisma.livro.findMany();
});
exports.listarLivros = listarLivros;
// Função para atualizar um livro
const atualizarLivro = (id, titulo, autor, anoPublicacao, genero) => __awaiter(void 0, void 0, void 0, function* () {
    return prisma.livro.update({
        where: { id },
        data: { titulo, autor, anoPublicacao, genero }
    });
});
exports.atualizarLivro = atualizarLivro;
// Função para excluir um livro
const excluirLivro = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return prisma.livro.delete({
        where: { id }
    });
});
exports.excluirLivro = excluirLivro;
