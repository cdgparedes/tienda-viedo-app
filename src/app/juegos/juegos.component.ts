import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';
import { Juego } from './juego';
import { JuegoService } from './juego.service';

@Component({
  selector: 'app-juegos',
  templateUrl: './juegos.component.html'
})
export class JuegosComponent implements OnInit {
   juegos: Juego[];

  constructor(private juegoService: JuegoService) { }

  ngOnInit(): void {
    this.juegoService.getjuegos().subscribe(
    juegos => this.juegos = juegos
   );
  }
  /**
   * Función que permite eliminar un juego
   * @param juego
   */
  delete(juego: Juego): void {
    swal ({
      title: 'Está Seguro?',
      type: 'warning',
      text: `¿Seguro que desea eliminar el juego ${juego.nombreJuego}?`,
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!'
    }).then((result) => {
      if (result.value) {
        this.juegoService.delete(juego.idJuego).subscribe(
          response =>{
            this.juegos = this.juegos.filter(jue => jue !== juego);
            swal(
              'Juego Eliminado!',
             `Juego ${juego.nombreJuego} eliminado con éxito`,
              'success'
            );
          }
        );
      }
    });
  }

}
