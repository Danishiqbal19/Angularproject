import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  userForm!:FormGroup;
  constructor(private fb:FormBuilder){

  }
  ngOnInit(): void {
    this.createForm();
    
  }
createForm(){
  this.userForm=this.fb.group({
    "UserName":['',Validators.required],
    "Gender":['',Validators.required],
    "PhoneNo":['',Validators.required],
    "mailid":['',Validators.required],

  })

}
submit(){
  console.log(this.userForm.value);
}
}
