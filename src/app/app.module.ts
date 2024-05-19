/*============================================
=            Importaciones Core            =
============================================*/
import { NgModule } from '@angular/core';
/*=====  End of Importaciones Core  ======*/

/*=============================================
=            Importaciones Modulos            =
=============================================*/
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
/*=====  End of Importaciones Modulos  ======*/

/*=================================================
=            Importaciones Componentes            =
=================================================*/

import { EcheveriaDetalleComponent } from './echeveria-detalle/echeveria-detalle.component';
import { DetalleProductoComponent } from './detalle-producto/detalle-producto.component';
import { BarraNavegacionComponent } from './barra-navegacion/barra-navegacion.component';
import { CrassulaDetalleComponent } from './crassula-detalle/crassula-detalle.component';
import { AeoniumDetalleComponent } from './aeonium-detalle/aeonium-detalle.component';
import { ListaProductoComponent } from './lista-producto/lista-producto.component';
import { CactusDetalleComponent } from './cactus-detalle/cactus-detalle.component';
import { SedumDetalleComponent } from './sedum-detalle/sedum-detalle.component';
import { CarritoComponent } from './carrito/carrito.component';
import { AppRoutingModule } from './rutas.module';
import { AppComponent } from './app.component';

/*=====  End of Importaciones Componentes  ======*/



@NgModule({
  declarations: [
    EcheveriaDetalleComponent,
    CrassulaDetalleComponent,
    DetalleProductoComponent,
    BarraNavegacionComponent,
    AeoniumDetalleComponent,
    CactusDetalleComponent,
    ListaProductoComponent,
    SedumDetalleComponent,
    CarritoComponent,
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserModule,
    CommonModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }