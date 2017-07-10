import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { RestapiService } from '../../providers/restapi-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  notes: any;

  constructor(public navCtrl: NavController, public restapiService: RestapiService) {
    this.getNotes();
  }

  getNotes() {
    this.restapiService.getNotes()
    .then(data => {
      this.notes = data;
      console.log(this.notes);
    });
  }
  removeNote(note){
    let index = this.notes.indexOf(note);

    if(index > -1){
      this.notes.splice(index, 1);
    }
  }

  newNote(){

  }
}
