import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projetoNovo';

pratos: any [] = [

{nome: 'Macarronada'},
{nome: 'Feijoada'},
{nome: 'Peixada'},
{nome: 'Arroz de Forno'},
{nome: 'Carne Assada'}

]

}
