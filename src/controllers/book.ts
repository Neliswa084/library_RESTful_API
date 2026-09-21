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

export const createNewBook = (req: Request, res: Response) => {
    const { title, year, authorId } = req.body

    const newBook: Books = {
        id: books.length + 1,
        title,
        year,
        authorId
    }
    books.push(newBook)

    res.status(201).json(newBook)
}

export const deleteBook = (req: Request, res: Response) => {
    const { id } = req.params
    const index = books.findIndex((book) => book.id === parseInt(id as string))

    if (index === -1) {
        return res.status(404).json({ message: "Book not found" })
    }
    books.splice(index, 1)

    res.status(200).json({ message: "Book deleted successfully" })
}

export const updateBook = (req: Request, res: Response) => {
    const { id } = req.params
    const { title, year, authorId } = req.body

    const book = books.find((book) => book.id === parseInt(id as string))

    if (!book) {
        return res.status(404).json({ message: "Book not found" })
    }

    book.title = title ?? book.title
    book.year = year ?? book.year
    book.authorId = authorId ?? book.authorId

    res.status(200).json(book)
}