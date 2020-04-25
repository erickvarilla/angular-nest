import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductoEntity } from '../entity/producto.entity';
import { Repository } from 'typeorm';
import { CreateProductoDto } from '../dto/create-producto-dto';

@Injectable()
export class ProductoService {
    constructor(
        @InjectRepository(ProductoEntity)
        private productoRepository: Repository<ProductoEntity>,
      ) {}

      async Listar(): Promise<ProductoEntity[]> {
        return await this.productoRepository.find();
      }

      async ListarUnProducto(idProducto: number): Promise<ProductoEntity> {
        return await this.productoRepository.findOne(idProducto);
      }
      async CrearProducto(productoNuevo: CreateProductoDto): Promise<ProductoEntity> {
        const nuevo = new ProductoEntity();
        nuevo.valor = productoNuevo.valor;
        nuevo.nombre = productoNuevo.nombre;
        return this.productoRepository.save(nuevo);
      }

      async UpdateProducto(idProducto: number, upDateProducto: CreateProductoDto) : Promise<ProductoEntity>{
        const update = await this.productoRepository.findOne(idProducto);
        update.nombre = upDateProducto.nombre;
        update.valor = upDateProducto.valor;
        return this.productoRepository.save(update);
      }

      async DeleteProducto(idProducto: number): Promise<any>{
          return await this.productoRepository.delete(idProducto);
      }
}
