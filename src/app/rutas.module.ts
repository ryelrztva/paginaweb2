/*==========================================
=            Importaciones Core            =
==========================================*/
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
/*=====  End of Importaciones Core  ======*/


/*============================================
=            Importaciones Vistas            =
============================================*/

import { EcheveriaDetalleComponent } from './echeveria-detalle/echeveria-detalle.component';
import { CrassulaDetalleComponent } from './crassula-detalle/crassula-detalle.component';
import { BarraNavegacionComponent } from './barra-navegacion/barra-navegacion.component';
import { DetalleProductoComponent } from './detalle-producto/detalle-producto.component';
import { AeoniumDetalleComponent } from './aeonium-detalle/aeonium-detalle.component';
import { CactusDetalleComponent } from './cactus-detalle/cactus-detalle.component';
import { ListaProductoComponent } from './lista-producto/lista-producto.component';
import { SedumDetalleComponent } from './sedum-detalle/sedum-detalle.component';
import { CarritoComponent } from './carrito/carrito.component';

/*=====  End of Importaciones Vistas  ======*/


const routes: Routes = [

  { path: 'detalle-producto/:id', component: DetalleProductoComponent},
  { path: 'detalle-echeveria', component: EcheveriaDetalleComponent},
  { path: 'detalle-crassula', component: CrassulaDetalleComponent},
  { path: 'detalle-aeonium', component: AeoniumDetalleComponent},
  { path: 'detalle-cactus', component: CactusDetalleComponent},
  { path: 'detalle-sedum', component: SedumDetalleComponent},
  { path: 'home', component: ListaProductoComponent},
  { path: 'carrito', component: CarritoComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
