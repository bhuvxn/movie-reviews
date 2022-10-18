import express from "express";

const router = express.Router(); // get access to express router

router.route("/").get((req, res) => res.send("hello world"));

export default router;
