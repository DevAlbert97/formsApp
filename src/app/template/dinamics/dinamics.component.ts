import { Component } from '@angular/core';

interface Person {
  name      : string;
  favorits  : Favorit[];
}

interface Favorit {
  id    : number;
  name  : string;
}

@Component({
  selector: 'app-dinamics',
  templateUrl: './dinamics.component.html',
  styleUrls: ['./dinamics.component.css']
})
export class DinamicsComponent {

  person: Person = {
    name: 'Carlos',
    favorits: [
      {id: 1, name: 'Metal Gear'},
      {id: 2, name: 'Death Stranding'},
      
    ]
  }

  newGame: string = '';

  save() {
    console.log("Formulario guardado")
  }

  delete(index: number) {
    this.person.favorits.splice(index,1);
  }

  addGame() {
    const newFavorit: Favorit = {
      id: this.person.favorits.length+1,
      name: this.newGame
    }
    this.person.favorits.push({...newFavorit});
    this.newGame="";
  }

}
