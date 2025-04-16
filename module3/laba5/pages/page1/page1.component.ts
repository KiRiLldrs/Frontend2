import { Component, OnInit } from '@angular/core';
import { DataService, Student } from '../../core/services/data.service';
import { filter, map } from 'rxjs';

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

export class Page1Component implements OnInit{

  users: User[] = [];
  students: Student[] = [];
  
  name ='';
  surname='';
  age = 0;
  constructor(private dataService: DataService){
    
  }
  ngOnInit(): void {
    this.dataService.getStudents()
    .pipe(
      filter(data=>data!=null),
      map((data=>(data.map(student => ({...student, group: student.group + '1 курс'})))))
    )
    .subscribe((students)=>{
      this.students = students;
    })
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
