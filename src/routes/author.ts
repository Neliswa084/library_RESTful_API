import {Router ,Request, Response} from "express";
import {body, param, validationResult} from "express-validator";
import { getAllAuthors } from "../controllers/author";

const router = Router()

router.get("/", getAllAuthors)


export default router;