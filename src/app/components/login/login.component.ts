import { UserService } from './../../service/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/common/user';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  user:User;
  loginForm:FormGroup;

  constructor(private service:UserService) { }

  ngOnInit(): void {
    this.loginForm=new FormGroup({
      userName:new FormControl('',[Validators.email,Validators.required]),
      password:new FormControl('',Validators.required),    
    });
  }

  userName(){
    return this.loginForm.get("userName")
  }
  password(){
    return this.loginForm.get("password")
  }

   onSubmit(){
    let userName:string=this.loginForm.value['userName'];
    let password:string=this.loginForm.value['password'];
    
     this.service.getUserByEmail(userName).subscribe(
      (data:User)=>{
        this.user=data;
      }
    ); 
    
    console.log(this.user);  // if it first time then it will null and few seconds it not empty
      
    if(this.user!=null){
      if(this.user.password.match(password))
        alert("valid User")
      else
        alert("password is wrong")
    }else{
      alert("invalid User")
    }
        
  }

}
