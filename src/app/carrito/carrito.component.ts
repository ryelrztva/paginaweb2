import { Component } from '@angular/core';
import { CarritoService } from '../carrito.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.css'
})
export class CarritoComponent {

  constructor(
    private servicioCarrito: CarritoService
  ){}

  contenidoCarrito = this.servicioCarrito.TraerCanastaCarrito();
  subTotal: number = 0;

  ngOnInit(){
    let subTotal: number = 0; 
    this.contenidoCarrito.map(function (elemento) {
      subTotal = subTotal + elemento.precio;
    });
    this.subTotal = subTotal;
  }
}
