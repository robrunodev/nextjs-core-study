import express from 'express';
import cors from 'cors';

import { clientTypeMiddleware } from './middleware/clientType.js';
import { postsRouter } from './routes/posts.js';
import { usersRouter } from './routes/users.js';
import { dashboardRouter } from './routes/dashboard.js';

const app = express();
const PORT = process.env.PORT || 3001;

// CORS: permite o frontend (Vite) chamar o BFF
app.use(cors({ origin: ['http://localhost:5173', 'http://127.0.0.1:5173'] }));
app.use(express.json());

// Detecta mobile vs web (header X-Client ou User-Agent)
app.use('/api', clientTypeMiddleware);

// Health check
app.get('/api/health', (_, res) => {
  res.json({ status: 'ok', service: 'bff', timestamp: new Date().toISOString() });
});

// Rotas do BFF (agregam/adaptam dados para o frontend)
app.use('/api/posts', postsRouter);
app.use('/api/users', usersRouter);
app.use('/api/dashboard', dashboardRouter);

app.listen(PORT, () => {
  console.log(`BFF rodando em http://localhost:${PORT}`);
});
