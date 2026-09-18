import { Request , Response } from "express";
import { Authors} from "../models/authorModel"

let authors : Authors[] =[] 

export const getAllAuthors =(req: Request, res:Response) => {
    res.status(200).json(authors)
}


export const createNewAuthor = (req: Request, res: Response) => {
    const { firstName, lastName, emailAddress } = req.body

    const newAuthor: Authors = {
        id: authors.length + 1,
        firstName,
        lastName,
        emailAddress
    }

    authors.push(newAuthor)

    res.status(201).json(newAuthor)
}