import { Controller, Post, Body, Get, Put, Delete } from '@nestjs/common';
import { CreateFacturaDto } from './dto/create-factura-dto';

@Controller('factura')
export class FacturaController {
    @Post()
    Create(@Body() createFacturatoDTO: CreateFacturaDto){
        return 'metodo post';
    }

    @Get()
    Listar(){
        return 'metodo get';
    }
    
    @Put(':id')
    Updata(@Body() upDataFaccturaDTO: CreateFacturaDto){
        return 'metodo put'
    }

    @Delete(':id')
    Delete(){
        return 'metodo delete'
    }
}
