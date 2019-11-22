import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaMateriaisComponent } from './lista-materiais/lista-materiais.component';
import { NovoMateriaisComponent } from './novo-materiais/novo-materiais.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaMateriaisComponent,
    NovoMateriaisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
