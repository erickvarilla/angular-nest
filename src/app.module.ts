import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductoController } from './producto/producto.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemController } from './item/item.controller';
import { FacturaController } from './factura/factura.controller';
import { ProductoEntity } from './producto/entity/producto.entity';
import { ProductoService } from './producto/service/producto.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'coldit2020',
      entities: [__dirname + "/**/*.entity{.ts,.js}"],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([ProductoEntity])
  ],
  controllers: [AppController, ProductoController, ItemController, FacturaController],
  providers: [AppService, ProductoService],
})
export class AppModule {}
