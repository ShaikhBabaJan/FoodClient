import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RegisterService } from '../register.service';
import { RouterModule,Router } from  '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  [x: string]: any;

  form;
  submitted=false;

  // message to be display if blog added or not
  err:string="";
  message = '';

  // Form is created in html file and write code to make it functional using FormBuilder
  // Write logic to make all fields as mandatory for form and check email is valid or not
  constructor(private formBuilder:FormBuilder,
    private registerservice:RegisterService) { 
      this.form=this.formBuilder.group(
        {
         firstName:['',Validators.required], 
        lastName: ['',Validators.required],
        emailId: ['',[Validators.required,Validators.email]],
        password: ['',Validators.required]
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
      this.registerservice.registerUserFromRemote(this.form.value).subscribe((data)=>{
        console.log(data);
        this.message="Registred Successfully!!"
      this.submitted=false;
    })
   }
  }
  // clearForm method is to reset the form after submitting
  clearForm() {
    //this.submitted=false;
    this.form.reset();
    this.form.markAsPristine();
    this.form.markAsUntouched();

  }
}

