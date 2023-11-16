import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { routing, appRoutingProvider } from './app.routing';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { ServiceSeries } from './services/service.departamento';
import { DetalleserieComponent } from './components/detalleserie/detalleserie.component';
import { ListapersonajeComponent } from './components/listapersonaje/listapersonaje.component';
import { MuevopersonajeComponent } from './components/muevopersonaje/muevopersonaje.component';
import { ModificarpersonajeComponent } from './components/modificarpersonaje/modificarpersonaje.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    DetalleserieComponent,
    ListapersonajeComponent,
    MuevopersonajeComponent,
    ModificarpersonajeComponent
  ],
  imports: [
    BrowserModule, 
    routing, HttpClientModule, FormsModule
  ],
  providers: [appRoutingProvider, ServiceSeries],
  bootstrap: [AppComponent]
})
export class AppModule { }
