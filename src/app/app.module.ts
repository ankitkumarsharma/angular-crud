import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './shared/contact/contact.component';
import { HomeComponent } from './home/home.component';
import { StaticCrudComponent } from './static-crud/static-crud.component';
import { DynamicCrudComponent } from './dynamic-crud/dynamic-crud.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BookRoomComponent } from './book-room/book-room.component';
import { BackToParentComponent } from './shared/back-to-parent/back-to-parent.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    HomeComponent,
    StaticCrudComponent,
    DynamicCrudComponent,
    BookRoomComponent,
    BackToParentComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
