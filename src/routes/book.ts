import {Router ,Request, Response} from "express";
import {body, param, validationResult} from "express-validator";
import { getAllBooks ,  getBookById } from "../controllers/book";

const router = Router()


router.get("/", getAllBooks)

router.get("/:id" ,
    [param("id").isInt().withMessage("Id must be an interger")],
    (req:Request , res: Response) =>{
        const errors = validationResult(req)
        console.log(errors , "Errors from express validator middleware")
        if(!errors.isEmpty()){
            return res.status(400).json({errors: errors.array()});
    }
    getBookById(req, res)
})

export default router;