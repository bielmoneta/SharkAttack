import { Component, OnInit } from '@angular/core';
import { SharkapiService } from '../services/sharkapi.service';

@Component({
  selector: 'app-ataque',
  templateUrl: './ataque.page.html',
  styleUrls: ['./ataque.page.scss'],
  standalone: false
})
export class AtaquePage implements OnInit {

  constructor(private attack: SharkapiService) { }

  attacks: any[] = [];

  ngOnInit() {
    this.attack.getAllAttacks().subscribe((dados: any) => {
      console.log(dados);
      this.attacks = dados.results;
    });
  }
  
}