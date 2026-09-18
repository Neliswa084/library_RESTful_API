import {Router ,Request, Response} from "express";
import {body, param, validationResult} from "express-validator";
import { getAllAuthors ,createNewAuthor, getAuthorById,deleteAuthor} from "../controllers/author";

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

router.get("/:id" , 
    [param("id").isInt().withMessage("Id must be an interger")],
    (req:Request , res: Response) =>{
        const errors = validationResult(req)
        console.log(errors , "Errors from express validator middleware")
        if(!errors.isEmpty()){
            return res.status(400).json({errors: errors.array()});
    }
    getAuthorById(req, res)
})



router.delete("/:id", [
    param("id").isInt().withMessage("ID must be an integer"),
], (req: Request, res: Response) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }
    deleteAuthor(req, res)
})

// router.put("/:id", [
//     param("id").isInt().withMessage("ID must be an integer"),
//     body("firstName").optional().notEmpty().withMessage("First name cannot be empty"),
//     body("lastName").optional().notEmpty().withMessage("Last name cannot be empty"),
//     body("emailAddress").optional().isEmail().withMessage("Must be a valid email"),
// ], (req: Request, res: Response) => {
//     const errors = validationResult(req)
//     if (!errors.isEmpty()) {
//         return res.status(400).json({ errors: errors.array() })
//     }
//     updateAuthor(req, res)
// })
export default router;  