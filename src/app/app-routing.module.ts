import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UpdateBookComponent } from './update-book/update-book.component';
import { UserComponent } from './user/user.component';

import { HomeComponent } from './home/home.component';
import { ShowBooksComponent } from './show-books/show-books.component';
import { AddBookComponent } from './add-book/add-book.component';
import { SearchByNameComponent } from './search-by-name/search-by-name.component';
import { ReturnBooksComponent } from './return-books/return-books.component';
import { ShowRequestsComponent } from './show-requests/show-requests.component';
import { IssuedBooksComponent } from './issued-books/issued-books.component';
import { BorrowedBooksComponent } from './borrowed-books/borrowed-books.component';
import { ShowUsersComponent } from './show-users/show-users.component';
import { RequestBooksComponent } from './request-books/request-books.component';
import { AuthGuard } from './auth.guard';
import { SearchComponent } from './search/search.component';
import { SidebarComponent } from './sidebar/sidebar.component';



const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'sideBar', component: SidebarComponent },

  { path: 'addBook', component: AddBookComponent, data: { roles: ['admin'] }, canActivate: [AuthGuard] },
  { path: 'updateBook', component: UpdateBookComponent, data: { roles: ['admin'] }, canActivate: [AuthGuard] },

  { path: 'bookDetails', component: ShowBooksComponent, data: { roles: ['admin'] }, canActivate: [AuthGuard] },
  { path: 'userDetails', component: ShowUsersComponent, data: { roles: ['admin'] }, canActivate: [AuthGuard] },
  { path: 'requestBooksDetails', component: ShowRequestsComponent, data: { roles: ['admin'], canActivate: [AuthGuard] } },
  { path: 'issuedBookDetails', component: IssuedBooksComponent, data: { roles: ['admin'] }, canActivate: [AuthGuard] },
  {path: 'user', component: UserComponent},

  { path: 'allBookDetails', component: SearchByNameComponent },
  { path: 'returnBook', component: ReturnBooksComponent, data: { roles: ['student'] }, canActivate: [AuthGuard] },
  { path: 'borrowedBooks', component: BorrowedBooksComponent, data: { roles: ['student'] }, canActivate: [AuthGuard] },
  { path: 'requestBook', component: RequestBooksComponent, data: { roles: ['student'] }, canActivate: [AuthGuard] },
  { path: 'search', component: SearchComponent },

  { path: '', redirectTo: 'home', pathMatch: 'full' }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
