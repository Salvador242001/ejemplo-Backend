import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {

    constructor(private readonly ProductService: ProductService){}

    @Get()
    getProduct(){

        return this.ProductService.findall();
    }

    @Get (':id')
    getClientById(@Param('id', ParseIntPipe) id: number){
    
        console.log(`el id a buscar es ${id}`);
    
        return this.ProductService.findById(id);
    
    
    }
    
    @Put (':id')
    updateClient(@Param('id', ParseIntPipe) id: number, @Body() body){
    
        console.log(`el id a actualizar es ${id}`);
        console.log(body);
    
        return {status:'actulizado'};
    
        
    }


    @Delete(':id')
    deleteById(@Param('id', ParseIntPipe) id: number){

        console.log(`El id a eliminar es ${id}`)

        return this.ProductService.deleteProduct(id);
    }

    @Post()
    createProduct(@Body() body){

        console.log(body);

        return this.ProductService.createProduct(body);
    }

}
