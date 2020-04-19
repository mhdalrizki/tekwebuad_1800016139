import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HalamanBaruComponent } from '../pages/halaman-baru/halaman-baru.component';
import { HalamanNewComponent } from '../pages/halaman-new/halaman-new.component';

@NgModule({
  declarations: [
    AppComponent,
    HalamanBaruComponent,
    HalamanNewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
