import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VentasComponent } from './Vistas/ventas/ventas.component';
import { StockComponent } from './Vistas/stock/stock.component';
import { ProveedoresComponent } from './Vistas/proveedores/proveedores.component';
import { InicioComponent } from './Vistas/inicio/inicio.component';
import { LoginComponent } from './Vistas/login/login.component';
import { ComprasComponent } from './Vistas/compras/compras.component';
import { FinanzasComponent } from './Vistas/finanzas/finanzas.component';
import { FooterComponent } from './Index-Componentes/footer/footer.component';
import { NavBarComponent } from './Index-Componentes/nav-bar/nav-bar.component';
import { BodyComponent } from './Index-Componentes/body/body.component';
import { ServicioService } from './Service/servicio.service';
import {  RouterModule,Routes } from '@angular/router';
import {  NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule, DatePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';


const route:Routes = [
  {path:'', redirectTo: '/inicio',pathMatch:'full'},
  {path:'inicio', component:InicioComponent },
  {path:'navbar', component:NavBarComponent },
  {path:'body', component:BodyComponent },
  {path:'footer', component:FooterComponent },
  {path:'ventas', component:VentasComponent },
  {path:'compras', component:ComprasComponent },
  {path:'proveedores', component:ProveedoresComponent },
  {path:'stock', component:StockComponent },
  {path:'finanzas', component:FinanzasComponent },
  {path:'login', component:LoginComponent }

 
]

@NgModule({
  declarations: [
    AppComponent,
    VentasComponent,
    StockComponent,
    ProveedoresComponent,
    InicioComponent,
    LoginComponent,
    ComprasComponent,
    FinanzasComponent,
    FooterComponent,
    NavBarComponent,
    BodyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(route)
  
  ],
  providers: [ServicioService],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
