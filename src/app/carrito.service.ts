import { Productos } from './productos';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  constructor() { }

  canastaCarrito: Productos[] = [];

  agregarACarrito(producto: Productos) {
    this.canastaCarrito.push(producto);
  }

  eliminarDeCanasta(id: Number) {
    console.log(id);
  }

  TraerCanastaCarrito() {
    return this.canastaCarrito;
  }

  LimpiarCarrito() {
    this.canastaCarrito = [];
    return this.canastaCarrito;
  }

}