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
@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    HomeComponent,
    StaticCrudComponent,
    DynamicCrudComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
