import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { ClientService } from './client.service';

@Controller('client')
export class ClientController {

constructor (private readonly clientService: ClientService) {}

@Get()
getClients(){
return this.clientService.findall();

}

@Get (':id')
getClientById(@Param('id', ParseIntPipe) id: number){

    console.log(`el id a buscar es ${id}`);

    return this.clientService.findById(id);


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

        return this.clientService.deleteClient(id);
    }

    @Post()
    createClient(@Body() body){

        console.log(body);

        return this.clientService.createClient(body);
    }



}
