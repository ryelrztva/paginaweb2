import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CarritoService } from '../carrito.service';
import { productos, Productos } from '../productos';

@Component({
  selector: 'app-echeveria-detalle',
  templateUrl: './echeveria-detalle.component.html',
  styleUrl: './echeveria-detalle.component.css'
})
export class EcheveriaDetalleComponent {

  constructor(
    private servicioCarrito: CarritoService,
    private ruta: Router
  ){}

  productos = [...productos];
  echeveria!: Productos[];

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
    let arregloDeEcheverias: Productos[] = [];
    this.productos.map((elemento) => {
      if(elemento.categoria === "Echeveria"){
        arregloDeEcheverias.push(elemento);
      }
    });
    this.echeveria = arregloDeEcheverias;
  }

}
