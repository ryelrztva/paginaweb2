import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CarritoService } from '../carrito.service';
import { productos, Productos } from '../productos';

@Component({
  selector: 'app-sedum-detalle',
  templateUrl: './sedum-detalle.component.html',
  styleUrl: './sedum-detalle.component.css'
})
export class SedumDetalleComponent {

  constructor(
    private servicioCarrito: CarritoService,
    private ruta: Router
  ){}

  productos = [...productos];
  sedum!: Productos[];

  ngOnInit(): void {
    this.TraerProductos();
  }

  comprar(productoEscogido: Productos){
    this.servicioCarrito.agregarACarrito(productoEscogido);
    window.alert('El producto fue agregado al carrito!');
  }

  detalle(escogido: Productos) {
    this.ruta.navigateByUrl(`detalle-producto/${escogido.id}`);
  }

  TraerProductos(){
    let arregloDeSedums: Productos[] = [];
    this.productos.map((elemento) => {
      if(elemento.categoria === "Sedum"){
        arregloDeSedums.push(elemento);
      }
    });
    this.sedum = arregloDeSedums;
  }

}
