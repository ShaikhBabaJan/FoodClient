import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from '../register.service';
import { SearchService } from './search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  form;
  emailtemp="";
  submitted=false;
  message="";
  issues:any=[];
  data1:any=[];
  temp:any=[];
  state=false;
  datatemp:any=[];
 
    reset(){
      return this.state;
    }

  constructor(private formBuilder:FormBuilder,
    private searchservice:SearchService,
    private router:Router) { 
      this.form=this.formBuilder.group(
        {
         search:['',Validators.required], 
        
    });
    }

  ngOnInit() { 
   
    
  }
  get f() { return this.form.controls; }
 
  onSubmit() {
    if(!this.form.valid){
      this.submitted=true;
      this.message="Please verify the details!!"
    }
    else{
        this.data1=[];
        this.temp=[];
        this.datatemp=[];
        this.state=true;
       var temp1= this.form.value;
      let temp_user=temp1.search
      this.data1.push(this.data1);
   
      this.searchservice.getuser(temp_user).subscribe((data:any)=>{
        this.issues=data;
        
          this.data1=this.issues.foods[0].foodNutrients;
          
        
        


          this.message=temp_user;
          for(let i=0;i<this.data1.length;i++){
            this.temp.push(this.data1[i]);
            this.datatemp.push({food:temp_user,nutrition:this.data1[i].nutrientName,
              value:this.data1[i].value});
           
           
          
            }
       
      })

      
   }
  }
 
  clearForm() {
    this.form.reset();
    this.form.markAsPristine();
    this.form.markAsUntouched();

  }
  addtofav(search:String){
    var favdata:any=[];
    favdata.push({id:1,name:search})
    console.log(favdata);
     this.searchservice.fav(search).subscribe((data:any)=>{
      console.log(data);
  })
 }

  }
