import { Request , Response } from "express";
import { Books } from "../models/bookModel"

let books : Books[] =[]

export const getAllBooks = (req: Request, res: Response) => {
    res.status(200).json(books)
}
