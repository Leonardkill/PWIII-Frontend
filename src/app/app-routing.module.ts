import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaMateriaisComponent } from './lista-materiais/lista-materiais.component';
import { NovoMateriaisComponent } from './novo-materiais/novo-materiais.component';

const routes: Routes = [
{ path: 'listagem', component: ListaMateriaisComponent},
{path: 'novo', component: NovoMateriaisComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
