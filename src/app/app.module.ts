import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HttpService } from './http/http.service';

@NgModule({
  declarations: [AppComponent, HomeComponent, HeaderComponent, SidebarComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, ReactiveFormsModule],
  providers: [HttpService],
  bootstrap: [AppComponent],
})
export class AppModule {}
