import { Request , Response } from "express";
import { Authors} from "../models/authorModel"

let authors : Authors[] =[] 

export const getAllAuthors =(req: Request, res:Response) => {
    res.status(200).json(authors)
}

export const  createNewAuthor = (req: Request , res : Response) =>{
    
} 