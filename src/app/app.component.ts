import { Component, OnInit } from '@angular/core';
import { ProductoServiceService } from './service/producto.service.service';
import { ProductoInterface } from './interface/producto-interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProductoServiceService],
})
export class AppComponent implements OnInit {
  public producto;
  public unProducto;
  public producInter: ProductoInterface;
  public bandera; public banderaModificar;
  constructor(private _http: ProductoServiceService) {
    this.producInter = new ProductoInterface();
  }
  ngOnInit(): void {
    this.banderaModificar="valor";
    this.getProducto();
  }
  // Servicio que extrae de la base de datos el total de productos
  getProducto() {
    this._http.cargaProducto().subscribe(
      result => {
        this.producto = result.Respuesta;
        console.log(this.producto);
      },
      err => {
        console.log(<any>err);
      }
    ); // fin subscribe
  }// fin getProducto

  // Servicio que extrae de la base de datos un productos
  getUnProducto(id) {
    this._http.cargaUnProducto(id).subscribe(
      result => {
        this.unProducto = result.Respuesta;
        this.producInter = this.unProducto;
        if(this.producInter){
          this.banderaModificar="success";
        }
        console.log(this.unProducto);
      },
      err => {
        console.log(<any>err);
      }
    ); // fin subscribe
  }// fin getProducto

  // Servicio para crear productos
  getCrearProducto(form){
    this._http.crearProducto(this.producInter).subscribe(
      result => {
        console.log(result);
        if(this.producto){
          this.bandera='success';
          form.reset();
          window.location.reload();
        }else{
          this.bandera='false';
        }
      },
      err => {
        console.log(<any>err);
      }
    );
  }

  // servicio para eliminar un producto
  getDelete(id){
    this._http.deleteProducto(id).subscribe(
      result => {
       if(result.Respuesta){
          window.location.reload();
       }
      },
      err => {
        console.log(<any>err);
      }
    );
  }

  // servicio para actualizar
  modificar(id){
    this.getUnProducto(id);
  }

  // Servicio para crear productos
  getModificarProducto(form){
    this._http.updateProducto(this.producInter).subscribe(
      result => {
        console.log(result);
        if(this.unProducto){
          form.reset();
          window.location.reload();
        }
      },
      err => {
        console.log(<any>err);
      }
    );
  }

}
