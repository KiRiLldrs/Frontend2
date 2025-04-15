import { Component } from '@angular/core';
import { DataService } from '../../core/services/data.service';

export class User{
  constructor(public name:string, public age: number, public surname: string){

  }
}

@Component({
  selector: 'app-page1',
  imports: [],
  templateUrl: './page1.component.html',
  styleUrl: './page1.component.css'
})
export class Page1Component {

  users: User[] = [];

  name ='';
  surname='';
  age = 0;
  constructor(private dataService: DataService){
    console.log(this.dataService.getData());
  }

  addUser(){
    this.users.push(new User(this.name, this.age, this.surname));
    this.name ='';
    this.surname='';
    this.age = 0;
  }

  onNameChange(): void{
    console.log('Что то изменилось ' + this.name);
  }
}
