import {Router ,Request, Response} from "express";
import {body, param, validationResult} from "express-validator";
import { getAllAuthors ,createNewAuthor} from "../controllers/author";

const router = Router()

router.get("/", getAllAuthors)

router.post("/",[
    body("firstName").notEmpty().withMessage("First Name is required"),
    body("lastName").notEmpty().withMessage("Last Name is required"),
    body("emailAddress").isEmail().withMessage("Must be a valid email")
], (req: Request, res: Response) =>{
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array})

    }
    createNewAuthor(req, res)

}
)
export default router;