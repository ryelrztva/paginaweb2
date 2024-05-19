import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CarritoService } from '../carrito.service';
import { productos, Productos } from '../productos';

@Component({
  selector: 'app-cactus-detalle',
  templateUrl: './cactus-detalle.component.html',
  styleUrl: './cactus-detalle.component.css'
})
export class CactusDetalleComponent {

  constructor(
    private servicioCarrito: CarritoService,
    private ruta: Router
  ){}

  productos = [...productos];
  cactus!: Productos[];

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
    let arregloDeCactus: Productos[] = [];
    this.productos.map((elemento) => {
      if(elemento.categoria === "Cactus"){
        arregloDeCactus.push(elemento);
      }
    });
    this.cactus = arregloDeCactus;
  }

}
