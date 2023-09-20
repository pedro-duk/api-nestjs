import { Injectable } from "@nestjs/common";
import Book from "./book.entity";
import { CreateBookDTO } from "./dto/CreateBook.dto";

@Injectable()
export class BookRepository {
  async save (bookData: CreateBookDTO) {
    const newBook = new Book(bookData);
    await newBook.save();
  }

  async findById(bookId: string) {
    return await Book.findById(bookId);
  }
}