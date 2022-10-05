import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';

import { AppComponent } from './app.component';
import { ClienteInserirComponent } from './clientes/cliente-inserir/cliente-inserir.component'



@NgModule({
declarations: [AppComponent, ClienteInserirComponent],
imports: [
BrowserModule,
FormsModule,
BrowserAnimationsModule,
MatInputModule,
MatCardModule,
],
providers: [],
bootstrap: [AppComponent],
})
export class AppModule {}
