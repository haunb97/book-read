import { Component, OnInit } from '@angular/core';
import {Book} from '../book';
import {BookService} from '../book.service';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-book-read',
  templateUrl: './book-read.component.html',
  styleUrls: ['./book-read.component.css']
})
export class BookReadComponent implements OnInit {
  private createForm: FormGroup;
  bookList: Book[] = [];

  constructor(
    private bookService: BookService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.bookService.getBooks().subscribe(next => this.bookList = next , error => this.bookList = []);
    this.createForm = this.fb.group({
      name: [''],
      read: true
    });
  }
  onSubmit() {
    const {value} = this.createForm;
    this.bookService.createBook(value).subscribe(next => {
      this.createForm.reset({
        name: [''],
        read: [true]
      });
      confirm('thêm thành công');
    });
  }

}
