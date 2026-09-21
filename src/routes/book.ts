import {Router ,Request, Response} from "express";
import {body, param, validationResult} from "express-validator";
import { createNewBook, deleteBook, getAllBooks ,  getBookById, updateBook } from "../controllers/book";

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

router.post("/",[
    body("title").notEmpty().withMessage("Title is required"),
    body("year").isInt().withMessage("Year must be an integer"),
    body("authorId").isInt().withMessage("Author ID must be an integer")
], (req: Request, res: Response) =>{
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    }
    createNewBook(req, res)
}
)

router.delete("/:id", [
    param("id").isInt().withMessage("ID must be an integer"),
], (req: Request, res: Response) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }
    deleteBook(req, res)
})

router.put("/:id", [
    param("id").isInt().withMessage("ID must be an integer"),
    body("title").optional().notEmpty().withMessage("Title cannot be empty"),
    body("year").optional().isInt().withMessage("Year must be an integer"),
    body("authorId").optional().isInt().withMessage("Author ID must be an integer"),
], (req: Request, res: Response) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }
    updateBook(req, res)
})
export default router;