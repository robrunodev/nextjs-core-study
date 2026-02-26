import { Router } from "express";

const router = Router();
const JSONPLACEHOLDER = "https://jsonplaceholder.typicode.com";

/**
 * BFF: busca usuários.
 * Para mobile: só id e nome (lista mínima para seleção/autocomplete).
 */
router.get("/", async (req, res) => {
  try {
    const response = await fetch(`${JSONPLACEHOLDER}/users`);
    const users = await response.json();

    const isMobile = req.clientType === "mobile";

    if (isMobile) {
      res.json(
        users.map((u) => ({
          id: u.id,
          nome: u.name,
        }))
      );
    } else {
      res.json(
        users.map((u) => ({
          id: u.id,
          nome: u.name,
          email: u.email,
          usuario: u.username,
        }))
      );
    }
  } catch (err) {
    console.error("BFF users error:", err);
    res.status(502).json({ erro: "Falha ao buscar usuários no backend" });
  }
});

export { router as usersRouter };
