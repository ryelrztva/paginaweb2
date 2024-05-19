import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CarritoService } from '../carrito.service';
import { productos, Productos } from '../productos';

@Component({
  selector: 'app-aeonium-detalle',
  templateUrl: './aeonium-detalle.component.html',
  styleUrl: './aeonium-detalle.component.css'
})
export class AeoniumDetalleComponent {

  constructor(
    private servicioCarrito: CarritoService,
    private ruta: Router
  ){}

  productos = [...productos];
  aeonium!: Productos[];

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
    let arregloDeAeoniums: Productos[] = [];
    this.productos.map((elemento) => {
      if(elemento.categoria === "Aeonium"){
        arregloDeAeoniums.push(elemento);
      }
    });
    this.aeonium = arregloDeAeoniums;
  }

}
