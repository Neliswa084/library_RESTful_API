import { Request , Response } from "express";
import { Books } from "../models/bookModel"

let books : Books[] =[]

export const getAllBooks = (req: Request, res: Response) => {
    res.status(200).json(books)
}

export const getBookById= (req: Request, res: Response) => {
    const { id } = req.params
    const book = books.find((book) => book.id === parseInt(id as string))

    if (!book) {
        return res.status(404).json({ message: "Book not found" })
    }
    res.status(200).json(book)
}