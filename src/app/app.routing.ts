import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { HomeComponent } from "./components/home/home.component"; 
import { DetalleserieComponent } from "./components/detalleserie/detalleserie.component";
import { ListapersonajeComponent } from "./components/listapersonaje/listapersonaje.component";
import { MuevopersonajeComponent } from "./components/muevopersonaje/muevopersonaje.component";


const appRoutes: Routes = [
    {path: "", component: HomeComponent},
    {path: "detalle/:id", component: DetalleserieComponent},
    {path:"personajes/:id", component:ListapersonajeComponent },
    {path:"personaje", component:MuevopersonajeComponent}
]
export const appRoutingProvider: any[] = [];
export const routing: ModuleWithProviders<any> = 
RouterModule.forRoot(appRoutes);
