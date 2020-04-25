import { Controller, Post, Body, Get, Put, Delete } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item-dto';

@Controller('item')
export class ItemController {
    @Post()
    Create(@Body() createItemtoDTO: CreateItemDto){
        return 'metodo post';
    }

    @Get()
    Listar(){
        return 'metodo get';
    }
    
    @Put(':id')
    Updata(@Body() upDataItemDTO: CreateItemDto){
        return 'metodo put'
    }

    @Delete(':id')
    Delete(){
        return 'metodo delete'
    }
}
