import {Router ,Request, Response} from "express";
import {body, param, validationResult} from "express-validator";
import { getAllBooks } from "../controllers/book";

const router = Router()


router.get("/", getAllBooks)

export default router;