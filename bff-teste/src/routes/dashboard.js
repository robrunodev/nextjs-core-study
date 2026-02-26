import { Router } from "express";

const router = Router();
const JSONPLACEHOLDER = "https://jsonplaceholder.typicode.com";

/**
 * BFF - Agregação: uma única chamada devolve resumo de vários "backends".
 * O frontend faz 1 request em vez de 2 (posts + users).
 */
router.get("/", async (req, res) => {
  try {
    const [postsRes, usersRes] = await Promise.all([
      fetch(`${JSONPLACEHOLDER}/posts`),
      fetch(`${JSONPLACEHOLDER}/users`),
    ]);

    const [posts, users] = await Promise.all([
      postsRes.json(),
      usersRes.json(),
    ]);

    const isMobile = req.clientType === "mobile";

    res.json({
      totais: {
        posts: posts.length,
        usuarios: users.length,
      },
      // Mobile: não envia listas grandes; web pode usar para preview
      ultimosPosts: isMobile
        ? []
        : posts.slice(0, 3).map((p) => ({ id: p.id, titulo: p.title })),
      cliente: req.clientType,
    });
  } catch (err) {
    console.error("BFF dashboard error:", err);
    res.status(502).json({ erro: "Falha ao montar dashboard" });
  }
});

export { router as dashboardRouter };
