import express from "express";
const router = express.Router();

import GetUser from "./user-info.js";

router.use("/user-info", GetUser);

export default router;
