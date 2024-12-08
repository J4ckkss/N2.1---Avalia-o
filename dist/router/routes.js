"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const livroController_1 = require("../controllers/livroController");
const router = express_1.default.Router();
// Definindo as rotas de CRUD
router.post('/livros', livroController_1.cadastrarLivro); // Criar livro
router.get('/livros', livroController_1.listarTodosLivros); // Listar livros
router.put('/livros/:id', livroController_1.atualizarLivroPorId); // Atualizar livro
router.delete('/livros/:id', livroController_1.excluirLivroPorId); // Excluir livro
exports.default = router;
