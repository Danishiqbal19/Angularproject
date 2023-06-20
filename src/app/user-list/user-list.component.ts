import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit{
  userList:user[]=[];
  constructor(){

  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  
 

}
export interface user{
  UserName:string,
  Gender:string,
  PhoneNo:number,
  mailid:string
}
