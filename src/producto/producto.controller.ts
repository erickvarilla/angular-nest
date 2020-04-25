import { Controller, Body, Post, Get, Put, Delete, Res, HttpStatus, Param } from '@nestjs/common';
import { CreateProductoDto } from './dto/create-producto-dto';
import { ProductoService } from './service/producto.service';

@Controller('api/producto')
export class ProductoController {

    constructor(private productoServicio: ProductoService){

    }
    @Post('/CrearProducto')
    Create(@Body() createProductoDTO: CreateProductoDto, @Res() Response){
       this.productoServicio.CrearProducto(createProductoDTO)
       .then(Resultado => {
           Response.status(HttpStatus.OK).json({
               ok:true,
               Resultado
            });
       })
       .catch(Error => {
           Response.status(HttpStatus.FORBIDDEN).json({
               ok: false,
               Mensaje: 'Error al crear el Producto..',
               Error
           });
       });
    }

    @Get('/ListarProductos')
    Listar( @Res() Response){
        this.productoServicio.Listar()
        .then(Respuesta => {
           Response.status(HttpStatus.OK).json({
               ok: true,
               Respuesta
           });
        })
        .catch(Error => {
            Response.status(HttpStatus.FORBIDDEN).json({
                ok: false,
                Mensaje:'No se Pudo Listar la informacion...',
                Error
            });
        });
    }
    @Get('/ListarProductos/:id')
    ListarUnProducto( @Res() Response,@Param('id') idProducto){
        this.productoServicio.ListarUnProducto(idProducto)
        .then(Respuesta => {
           Response.status(HttpStatus.OK).json({
               ok: true,
               Respuesta
           });
        })
        .catch(Error => {
            Response.status(HttpStatus.FORBIDDEN).json({
                ok: false,
                Mensaje:'No se Pudo Listar la informacion...',
                Error
            });
        });
    }
    @Put('/UpdateProducto/:id')
    Updata(@Body() upDataProductoDTO: CreateProductoDto, @Res() Response, @Param('id') idProducto){
        this.productoServicio.UpdateProducto(idProducto,upDataProductoDTO)
        .then(Respuesta =>{
            Response.status(HttpStatus.OK).json({
                ok:true,
                Mensaje:'Producto Actualizado..',
                Respuesta
            });
        })
        .catch(Error => {
            Response.status(HttpStatus.FORBIDDEN).json({
                ok:false,
                Mensaje:'Error al actualizar la informacion del producto...',
                Error
            });
        })
    }

    @Delete('/DeleteProducto/:id')
    Delete(@Res() Response, @Param('id') idProducto){
        this.productoServicio.DeleteProducto(idProducto)
        .then(Respuesta => {
            Response.status(HttpStatus.OK).json({
                ok:true,
                Mensaje:'Producto Eliminado..',
                Respuesta
            });
        })
        .catch(Error => {
            Response.status(HttpStatus.FORBIDDEN).json({
               ok:false,
               Mensaje:'Error Al eliminar el Producto',
               Error
            });
        })
    }

}
