import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CarritoService } from '../carrito.service';
import { productos, Productos } from '../productos';

@Component({
  selector: 'app-crassula-detalle',
  templateUrl: './crassula-detalle.component.html',
  styleUrl: './crassula-detalle.component.css'
})
export class CrassulaDetalleComponent {

  constructor(
    private servicioCarrito: CarritoService,
    private ruta: Router
  ){}

  productos = [...productos];
  crassula!: Productos[];

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
    let arregloDeCrassulas: Productos[] = [];
    this.productos.map((elemento) => {
      if(elemento.categoria === "Crassula"){
        arregloDeCrassulas.push(elemento);
      }
    });
    this.crassula = arregloDeCrassulas;
  }

}
