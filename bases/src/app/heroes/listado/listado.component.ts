import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {
  public heroeBorrado: string;

  public heroes: string[] = [ 'Spiderman', 'Ironman', 'Pikachu', 'Thor', 'Megaman'];

  public borrarHeroe(){
    this.heroeBorrado = this.heroes.shift() || '';
  }
  
}


