import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DirectivaComponent } from './directiva/directiva.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ClienteService } from './clientes/cliente.service';
import { RouterModule, Routes} from '@angular/router';
import { JuegosComponent } from './juegos/juegos.component';
import { JuegoService } from './juegos/juego.service';
import { FormComponent } from './clientes/form.component';
import { FormsModule } from '@angular/forms';
import { FormjuegoComponent } from './juegos/formjuego.component';


const routes: Routes = [
  
  { path: '', redirectTo: '/clientes', pathMatch: 'full' },
  { path: 'directivas', component: DirectivaComponent },
  { path: 'clientes', component:  ClientesComponent },
  { path: 'juegos', component:  JuegosComponent },
  { path: 'clientes/form', component:  FormComponent },
  { path: 'clientes/form/:idCliente', component:  FormComponent },
  { path: 'juegos/form/', component:  FormjuegoComponent },
  { path: 'juegos/form/:idJuego', component:  FormjuegoComponent }];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DirectivaComponent,
    ClientesComponent,
    JuegosComponent,
    FormComponent,
    FormjuegoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ ClienteService,
               JuegoService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
