import express from 'express';
import path from 'path'
import cors from 'cors'

import 'express-async-errors';

import './database/connection';

import routes from './routes'
import errorHandler from './errors/handler';
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')))
app.use(errorHandler);
// Rota =  conjunto 
// Recurso = usuário

// Métodos HTTP = GET,POST,PUT,DELETE
// Parâmetros = Query, Route, Body

//Query: (Através da Rota) enviados com "?", utilizamos quando queremos filtrar informações
// http://localhost:3333/users?search=otavio

//Route: (Atráves da Rota) identificar um recurso pela rota
//http://localhost:3333/users/1

//Body: Serve para enviar dados que não cabe nos outros parãmetros. Informações mais completas.
//http://localhost:3333/users

// GET = Buscar informação (Lista, item)
// POST = Criando uma informação nova 
// PUT = Editando uma informação
// DELETE = Deletando uma informação



app.listen(3333);

//Driver Nativo, Query builder, ORM