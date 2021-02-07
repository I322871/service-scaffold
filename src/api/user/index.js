import express from "express";
import querymen from "querymen";
import { password, master, token } from "../../services/passport.js";
import { find, findOne, create, initAdmin, update, updatePassword, destroy } from "./controller.js";

const router = new express.Router();
const query = querymen.middleware;

router.get("/",
    token(["admin"]),
    query(),
    find);

router.get("/:id",
    token(),
    findOne);

router.post("/",
    token(["admin"]),
    create);

router.post("/initAdmin",
    master(),
    initAdmin);

router.put("/:id",
    token(),
    update);

router.put("/:id/password",
    password(),
    updatePassword);

router.delete("/:id",
    token(["admin"]),
    destroy);

export default router;
