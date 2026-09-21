import { Request , Response } from "express";
import { Authors} from "../models/authorModel"
import { books } from "./book";

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



export const deleteAuthor = (req: Request, res: Response) => {
    const { id } = req.params

    const index = authors.findIndex((author) => author.id === parseInt(id as string))

    if (index === -1) {
        return res.status(404).json({ message: "Author not found" })
    }

    authors.splice(index, 1)

    res.status(200).json({ message: "Author deleted successfully" })
}

export const updateAuthor = (req: Request, res: Response) => {
    const { id } = req.params
    const { firstName, lastName, emailAddress } = req.body

    const author = authors.find((author) => author.id === parseInt(id as string))

    if (!author) {
        return res.status(404).json({ message: "Author not found" })
    }

    author.firstName = firstName ?? author.firstName
    author.lastName = lastName ?? author.lastName
    author.emailAddress = emailAddress ?? author.emailAddress

    res.status(200).json(author)
}
export const getBooksByAuthor = (req: Request, res: Response) => {
    const { id } = req.params

   
    const authorBooks = books.filter((book) => book.authorId === parseInt(id as string))

    res.status(200).json(authorBooks)
}