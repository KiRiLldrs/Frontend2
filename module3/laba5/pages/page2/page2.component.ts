import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-page2',
  imports: [],
  templateUrl: './page2.component.html',
  styleUrl: './page2.component.css'
})
export class Page2Component {
  users: any[] = [];

  myForm = new FormGroup({
    "userName": new FormControl('', Validators.required),
    "userSurname": new FormControl('',Validators.required)
  });

  constructor(){
    this.onreInitForm();
  }

  onSubmit(){
    console.log(this.myForm.getRawValue());
  }

  onreInitForm(){
    this.myForm = new FormGroup({
      "userName": new FormControl('', Validators.required),
      "userSurname": new FormControl('',Validators.required)
    })
  }




}





