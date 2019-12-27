import { Component, OnInit } from '@angular/core';
import {Book} from '../book';
import {BookService} from '../book.service';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-book-unread',
  templateUrl: './book-unread.component.html',
  styleUrls: ['./book-unread.component.css']
})
export class BookUnreadComponent implements OnInit {
  bookList: Book[] = [];

  constructor(
    private bookService: BookService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.bookService.getBooks().subscribe(next => this.bookList = next , error => this.bookList = []);
  }

}
