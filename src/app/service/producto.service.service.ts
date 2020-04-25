import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ProductoInterface } from '../interface/producto-interface';

@Injectable({
  providedIn: 'root'
})
export class ProductoServiceService {

  public headers;
  // injecto el servcio http en el constructor
    constructor(public _http: HttpClient) {
      this.headers = new HttpHeaders().set('Content-Type', 'application/json');
    }

    // Servicio que extrae de la base de datos el total de productos
  cargaProducto(): Observable<any> {
    return this._http.get<ProductoInterface>('api/producto/ListarProductos', {headers: this.headers});
  }

  // Servicio que extrae de la base de datos un producto de productos
  cargaUnProducto(id): Observable<any> {
    return this._http.get<ProductoInterface>('api/producto/ListarProductos/'+id, {headers: this.headers});
  }

  // servicio que crea un  nuevo producto
  crearProducto(producto: ProductoInterface){
    let params = JSON.stringify(producto);
    return this._http.post('api/producto/CrearProducto', params, {headers: this.headers});
  }

  // servicio para eliminar un producto
  deleteProducto(id): Observable<any> {
  return this._http.delete('api/producto/DeleteProducto/'+id,{headers: this.headers});
  }

  //servicio para Actualizar productos
  updateProducto(producto): Observable<any> {
    let params = JSON.stringify(producto);
    return this._http.put('api/producto/UpdateProducto/'+producto.codigo, params, {headers: this.headers});
  }

}
