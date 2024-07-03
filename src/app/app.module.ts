import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ResumeComponent } from './components/resume/resume.component';
import { DialogExampleComponent } from './dialog-example/dialog-example.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ResumeComponent,
    DialogExampleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    ButtonModule,
    // Add other PrimeNG modules as needed
  ],
  providers: [
    // Add services if needed
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
