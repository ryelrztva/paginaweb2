import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { productos, Productos } from '../productos';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrl: './detalle-producto.component.css'
})
export class DetalleProductoComponent {

  constructor(private route: ActivatedRoute){}

  producto: Productos | undefined;
  todosLosProductos = [...productos];

  ngOnInit(): void {
    this.TraerProducto();
  }

  TraerProducto(){
    this.route.paramMap.subscribe(parametros => {
      if (parametros.has('id')){
        let id = Number(parametros.get('id'))
        this.producto = this.todosLosProductos.find(producto => producto.id === id);
      }
    });
  }
}
