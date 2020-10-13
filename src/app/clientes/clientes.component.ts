import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { ClienteService } from './cliente.service';
import swal from 'sweetalert2';



@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html'
})
export class ClientesComponent implements OnInit {

  clientes: Cliente[] ;

  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.clienteService.getClientes().subscribe(
    clientes => this.clientes = clientes // esto es el observador, esto seria una funcion anonima tambien se conocen como arrows
    );
  }
  delete(cliente: Cliente): void {
    swal({
      title: 'Está Seguro?',
      type: 'warning',
      text: `¿Seguro que deseaeliminar el cliente ${cliente.nombreCliente}?`,
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!'
    }).then((result) => {
      if (result.value) {
        this.clienteService.delete(cliente.idCliente).subscribe(
          response =>{
            this.clientes = this.clientes.filter(cli => cli !== cliente);
            swal(
              'Cliente Eliminado!',
             `Cliente ${cliente.nombreCliente} eliminado con éxito`,
              'success'
            )
          }
        );
      }
    });
  }

}
