import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './clientes/formulario/formulario.component';
import { HomeComponent } from './home/home.component';
import { JogosComponent } from './jogos/jogos.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }, 
  {
    path: 'jogos',
    component: JogosComponent    
  },
  {
    path: 'formulario',
    component: FormularioComponent
  }, 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
