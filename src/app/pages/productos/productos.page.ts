import { Component, OnInit } from '@angular/core';
import { CATEGORIA } from 'src/app/core/interface/constants/cotagoria';
import { Producto } from 'src/app/core/interface/productos';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { 
    activatedRoute.params.subscribe(params=>{
      console.log(params)
      CATEGORIA.forEach(categoria=>{
       const productoEncontrado = categoria.productos.find(producto=>producto.id == params['id']);
        if(productoEncontrado){
          this.producto=productoEncontrado
        }
      })
    })
  }

  ngOnInit() {
  }
  producto:Producto={
    id: 0,
    nombre: '',
    precio: 0,
    ingredients:[],
    imagen: ''
  }

}
