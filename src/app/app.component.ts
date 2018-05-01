import { Component,  OnInit } from '@angular/core';
import {Mdprincipal} from '../app/material/shared/modelos/mdprincipal';

@Component({
  selector: 'gf-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'gf';
  mdprincipal: Mdprincipal;

  constructor() { }

  ngOnInit() {
    this.mdprincipal = {
      resumen: 'Esta hitoria esta basada en weas y mas weas de amor muy interesante para todos',
      autor: 'SoraJigoku',
      icon_princ: '' ,
      avatar_princ: 'https://i.pinimg.com/originals/5e/2d/c1/5e2dc143e1416450e91800dbdf6df09d.png' ,
      title_princ: 'Entre Sombras', 
      date: '2015-11-08',

      resumen2: 'Esta hitoria esta basada en weas y mas weas de amor muy interesante para todos',
      autor2: 'Sckorve',
      icon_princ2: '' ,
      avatar_princ2: 'https://www.pcgamesn.com/sites/default/files/Best%20LoL%20skins%20Cosmic%20Blade%20Master%20Yi.jpg' ,
      title_princ2: 'La ilusion de Sena', 
      date2: '2018-02-22',

      resumen3: 'Esta hitoria esta basada en weas y mas weas de amor muy interesante para todos',
      autor3: 'YugiKitsune',
      icon_princ3: '' ,
      avatar_princ3: 'http://1.bp.blogspot.com/-GiaRC7HA4Ao/Uv-dkqJjlZI/AAAAAAAAARs/Z9EJFEHIao0/s1600/7.jpg' ,
      title_princ3: 'Lloro por ti ', 
      date3: '2018-10-03'
    };
  }

}

