import { Body, Controller, Post } from '@nestjs/common';
import { BookRepository } from './book.repository';
import { CreateBookDTO } from './dto/CreateBook.dto';

@Controller('/books')
export class BookController {
  constructor(private bookRepository: BookRepository) {}

  @Post()
  async createBook(@Body() bookData: CreateBookDTO) {
    this.bookRepository.save(bookData);

    return {
      book: bookData,
      message: 'Book saved successfully',
    };
  }
}
