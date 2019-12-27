import {RouterModule, Routes} from '@angular/router';
import {BookHomeComponent} from './book-home/book-home.component';
import {NgModule} from '@angular/core';
import {BookReadComponent} from './book-read/book-read.component';
import {BookUnreadComponent} from './book-unread/book-unread.component';

const routes: Routes = [{
  path: 'books',
  component: BookHomeComponent
}, {
  path: '',
  redirectTo: '/books',
  pathMatch: 'full'
}, {
  path: 'books/read',
  component: BookReadComponent
}, {
  path: 'books/unread',
  component: BookUnreadComponent
}];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
