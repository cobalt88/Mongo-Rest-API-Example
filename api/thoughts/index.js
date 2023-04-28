import express from "express";
const router = express.Router();

import GetThoughts from "./get-thoughts.js";

router.use("/get-thoughts", GetThoughts);

export default router;
