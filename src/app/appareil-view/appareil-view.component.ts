import { Component, OnInit } from '@angular/core';
import {AppareilService} from '../services/appareil.service'

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit {

  appareils: any[];
  isAuth = false;

  constructor(private appareilService: AppareilService) {
    setTimeout(
      () =>{
        this.isAuth = true;
      }, 4000
    );
   }

  ngOnInit() {
    this.appareils = this.appareilService.appareils;
  }



  onAllumer(){
    this.appareilService.switchOnAll();
  }

  onEteindre(){
    if(confirm('Etes-vous sûr de vouloir éteindre tous vos appareils?')){
    this.appareilService.switchOffAll();
  } else {
    return null;
  }
  }
}
