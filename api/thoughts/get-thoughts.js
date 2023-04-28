import express from "express";
const router = express.Router();

router.get("/test", async (req, res) => {
  try {
    res.status(200).send("Thoughts test route");
  } catch (err) {
    res.status(500).send("Server error");
    console.error(err.message);
  }
});

export default router;
