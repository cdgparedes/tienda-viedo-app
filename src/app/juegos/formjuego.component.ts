import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import swal from 'sweetalert2';
import { Juego } from './juego';
import { JuegoService } from './juego.service';

@Component({
  selector: 'app-formjuego',
  templateUrl: './formjuego.component.html'

})
export class FormjuegoComponent implements OnInit {

  public juego: Juego = new Juego();
  public titulo = 'Crear Juego';


  constructor(private juegoService: JuegoService, private router: Router, private activatedRoute: ActivatedRoute ) { }

  ngOnInit(): void {
    this. cargarJuego();
  }

  cargarJuego(): void {
    this.activatedRoute.params.subscribe(params => {
      const idJuego = params['idJuego']
      if(idJuego) {
        this.juegoService.getJuego(idJuego).subscribe((juego) => this.juego = juego);
      }
    });

  }
    public create(): void {
      this.juegoService.create(this.juego).subscribe(
        juego => {
           this.router.navigate(['/juegos']);
           swal('Nuevo juego', `Juego ${juego.nombreJuego} creado con exito`, 'success' );
        }
      );
    }
    update(): void {
      this.juegoService.update(this.juego).subscribe(
        juego => {
          this.router.navigate(['/clientes'] );
          swal('Juego Actualizado', `Juego ${juego.nombreJuego} actualizado con exito!`, 'success' );
        }
      );
    }
}
