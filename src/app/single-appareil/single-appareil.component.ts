import { Component, OnInit, Input } from '@angular/core';
import { AppareilService } from '../services/appareil.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-appareil',
  templateUrl: './single-appareil.component.html',
  styleUrls: ['./single-appareil.component.scss']
})
export class SingleAppareilComponent implements OnInit {

  @Input() name: string;
  @Input() status: string;
  i: number;
  constructor(private appareilService: AppareilService,
                      private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.name = this.appareilService.getAppareilById(+id).name;
    this.status = this.appareilService.getAppareilById(+id).status;
    this.i = id-1;
  }
  onSwitch() {
    const id = this.route.snapshot.params['id'];
    if(this.status === 'allumé') {
      console.log('est allumé')
      this.appareilService.switchOffOne(this.i);
      this.status = this.appareilService.getAppareilById(+id).status;
    } else if(this.status === 'éteint') {
      console.log('est eteint')
      this.appareilService.switchOnOne(this.i);
      this.status = this.appareilService.getAppareilById(+id).status;
    }
    console.log(this.i)
  }
}
