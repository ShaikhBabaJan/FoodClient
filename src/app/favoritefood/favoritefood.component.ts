import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search/search.service';

@Component({
  selector: 'app-favoritefood',
  templateUrl: './favoritefood.component.html',
  styleUrls: ['./favoritefood.component.css']
})
export class FavoritefoodComponent implements OnInit {
 issues:any=[];
 data1:any=[];
 message='';
 datatemp:any=[];
 temp:any=[];
 view1=false;
 reset(){
   return this.view1;
 }

  constructor(private searchservice:SearchService) { }

  ngOnInit(){
    this.searchservice.getfav().subscribe((data)=>{
      this.issues=data;
   })
  }
  
  delete(id:any) {
    this.searchservice.delete(id).subscribe((data)=>{
      console.log(data);
    })


}
close(){
  this.view1=false;
}
view(name:any){
  this.view1=true;
  console.log(name);
  this.data1=[];
  this.datatemp=[];
  this.searchservice.getuser(name).subscribe((data:any)=>{
    this.data1=data;
    this.data1=this.data1.foods[0].foodNutrients;
          
          //console.log(this.data1);
        


          this.message=name;
          //  this.datatemp.value1=this.data1[0].value;
          //  console.log(this.datatemp);
          for(let i=0;i<this.data1.length;i++){
            this.temp.push(this.data1[i]);
            this.datatemp.push({food:name,nutrition:this.data1[i].nutrientName,
              value:this.data1[i].value});
           
            //this.datatemp.push(this.data1[i].value);
           
          
          }
          //console.log(this.datatemp);
          // console.log(this.datatemp.name);
       
      })

      
   }
   
  }
  
