import { Request , Response } from "express";
import { Authors} from "../models/authorModel"

let authors : Authors[] =[] 

export const getAllAuthors =(req: Request, res:Response) => {
    res.status(200).json(authors)
}

export const getAuthorById = (req:Request, res:Response)=>{
    const {id} =req.params
    const author = authors.find((author) => author.id === parseInt(id as string))

    if(!author){
        return res.status(404).send("Author not found");
    }
    res.status(200).json(author)
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
