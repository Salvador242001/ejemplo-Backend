import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class ProductService {
    private Products = [
        {
            id: 1,
            nombre: 'Producto 1',
           Tipo: 'clase 1'
        },

        {
            id: 2,
            nombre: 'Producto 2',
            Tipo: 'clase 2'
        }
    ]

    findall(){
        return this.Products;
    }

    findById(id: number){
        const product = this.Products.find(c => c.id === id);

        if (!product){
            throw new NotFoundException(`Product with id ${id} does not exist `);
        }
        return product;

    }

    deleteProduct(id){

        const product = this.Products.find(c => c.id === id);
    
        if(!product){
            throw new NotFoundException(`Products with id ${id} does not exist`);
        }
    
        return{status: 'Producto Eliminado'}
    }
    
    createProduct(productBody){
    
        const product = this.Products.find(c => c.id === productBody.id);
    
        if(product){
            throw new NotFoundException(`Product with id ${productBody.id} exists`);
        }
    
        return{status: 'Producto Creado'}
    }


}
