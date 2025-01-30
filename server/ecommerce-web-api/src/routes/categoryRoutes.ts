import {Router} from "express";
import {getAll, getOne} from "../controllers/categoryController";

const router = Router();

// @ts-ignore
router.get('/api/category', getAll);
// @ts-ignore
router.get('/api/category/:id', getOne);

export default router;
