import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class ClientService {

    private clients = [
        {
            id: 1,
            nombre: 'cliente 1',
            direccion: 'direccion 1'
        },

        {
            id: 2,
            nombre: 'cliente 2',
            direccion: 'direccion 2'
        }
    ]

    findall(){
        return this.clients;
    }

    findById(id: number){
        const client = this.clients.find(c => c.id === id);

        if (!client){
            throw new NotFoundException(`Client with id ${id} does not exist `);
        }
        return client;

    }

    deleteClient(id){

        const client = this.clients.find(c => c.id === id);

        if(!client){
            throw new NotFoundException(`Client with id ${id} does not exist`);
        }

        return{status: 'Cliente Eliminado'}
    }

    createClient(clientBody){

        const client = this.clients.find(c => c.id === clientBody.id);

        if(client){
            throw new NotFoundException(`Client with id ${clientBody.id} exists`);
        }

        return{status: 'Cliente Creado'}
    }

}
