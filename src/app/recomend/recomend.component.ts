import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recomend',
  templateUrl: './recomend.component.html',
  styleUrls: ['./recomend.component.css']
})
export class RecomendComponent implements OnInit {

  recomend:any=[

    {name:"banana"},{name:"apple"},{name:"mango"},{name:"cake"},{name:"tomato"},{name:"meat"},{name:"chicken"}]

  constructor() { }

  ngOnInit(): void {
    for(let i=0;i<this.recomend.length;i++){
      console.log(this.recomend[i].name);
    }
  }
  view(a:any){
    console.log(a);
  }

}
