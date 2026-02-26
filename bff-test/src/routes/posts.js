import { Router } from "express";

const router = Router();
const JSONPLACEHOLDER = "https://jsonplaceholder.typicode.com";

const LIMIT_WEB = 20;
const LIMIT_MOBILE = 8;

/**
 * BFF: busca posts e adapta o formato.
 * Para mobile: menos itens, payload enxuto (sem corpo na listagem) para economizar dados.
 */
router.get("/", async (req, res) => {
  try {
    const isMobile = req.clientType === "mobile";
    const limit = isMobile ? LIMIT_MOBILE : LIMIT_WEB;

    const response = await fetch(`${JSONPLACEHOLDER}/posts?_limit=${limit}`);
    const posts = await response.json();

    if (isMobile) {
      // Mobile: só id, titulo, usuarioId (lista leve para telas pequenas)
      res.json(
        posts.map((p) => ({
          id: p.id,
          titulo: p.title,
          usuarioId: p.userId,
        }))
      );
    } else {
      // Web: payload completo
      res.json(
        posts.map((p) => ({
          id: p.id,
          titulo: p.title,
          corpo: p.body,
          usuarioId: p.userId,
        }))
      );
    }
  } catch (err) {
    console.error("BFF posts error:", err);
    res.status(502).json({ erro: "Falha ao buscar posts no backend" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const response = await fetch(`${JSONPLACEHOLDER}/posts/${id}`);
    if (!response.ok) {
      return res.status(response.status).json({ erro: "Post não encontrado" });
    }
    const post = await response.json();

    const isMobile = req.clientType === "mobile";
    if (isMobile) {
      // Mobile: corpo truncado para economizar
      res.json({
        id: post.id,
        titulo: post.title,
        corpo: post.body?.slice(0, 200) + (post.body?.length > 200 ? "…" : ""),
        usuarioId: post.userId,
      });
    } else {
      res.json({
        id: post.id,
        titulo: post.title,
        corpo: post.body,
        usuarioId: post.userId,
      });
    }
  } catch (err) {
    console.error("BFF post by id error:", err);
    res.status(502).json({ erro: "Falha ao buscar post" });
  }
});

export { router as postsRouter };
