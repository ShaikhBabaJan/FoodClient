import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RegisterService } from '../register.service';
import {Route,Router,NavigationExtras,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  [x: string]: any;
  form;
  emailtemp="";
  submitted=false;
  message="";
  issues:any=[];
 


  constructor(private formBuilder:FormBuilder,
    private registerservice:RegisterService,
    private router:Router) { 
      this.form=this.formBuilder.group(
        {
         userName:['',Validators.required], 
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
       var temp1= this.form.value;
      let temp_user=temp1.userName
      let temp_pass=temp1.password

      this.registerservice.getuser(temp_user).subscribe((data)=>{
        this.issues=data;
        //var temp=this.issues.value;
        let user=this.issues.emailId;

        let password1=this.issues.password
        if(temp_pass==password1&&temp_user==user){
          console.log('true');
          console.log(user);
          localStorage.setItem('username',user)
          console.log(localStorage.getItem('username'))
          this.router.navigate(["/search"])
         // window.location.href="search";
         console.log(localStorage.getItem('username'))
        
        }
        else{
          this.message="invalid username/password!!"
        }
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