import express from "express";
const router = express.Router();

import GetUser from "./get-user.js";

router.use("/get-user", GetUser);

export default router;
