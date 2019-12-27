import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookUnreadComponent } from './book-unread.component';

describe('BookUnreadComponent', () => {
  let component: BookUnreadComponent;
  let fixture: ComponentFixture<BookUnreadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookUnreadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookUnreadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
