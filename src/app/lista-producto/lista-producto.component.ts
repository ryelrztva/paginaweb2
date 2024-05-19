import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CarritoService } from '../carrito.service';
import { productos, Productos } from '../productos';


@Component({
  selector: 'app-lista-producto',
  templateUrl: './lista-producto.component.html',
  styleUrl: './lista-producto.component.css'
})
export class ListaProductoComponent {

  constructor(
    private ruta: Router,
    private servicioCarrito: CarritoService
  ) { }

  productos = [...productos];

  comprar(productoEscogido: Productos){
    this.servicioCarrito.agregarACarrito(productoEscogido);
    window.alert('El producto fue agregado al carrito!');
  }

  detalle(escogido: Productos) {
    this.ruta.navigateByUrl(`detalle-producto/${escogido.id}`);
  }

}
