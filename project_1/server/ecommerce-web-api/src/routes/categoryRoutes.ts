import {Router} from "express";
import {create, getAll, getOne} from "../controllers/categoryController";

const router = Router();

// @ts-ignore
router.get('/api/category', getAll);
// @ts-ignore
router.get('/api/category/:id', getOne);
// @ts-ignore
router.post('/api/category', create)

export default router;
