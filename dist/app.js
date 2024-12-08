"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const routes_1 = __importDefault(require("./router/routes"));
const client_1 = require("@prisma/client");
dotenv_1.default.config(); // Carregar variáveis de ambiente
const app = (0, express_1.default)();
const PORTA = process.env.PORT || 3000; // Usar a porta configurada no .env
// Configuração do Prisma Client diretamente no index.ts
const prisma = new client_1.PrismaClient();
app.use(express_1.default.json()); // Configura o Express para interpretar JSON
app.use('/api', routes_1.default); // Usar as rotas criadas para livros
// Iniciando o servidor
app.listen(PORTA, () => {
    console.log(`Servidor executando na porta: ${PORTA}`);
});
