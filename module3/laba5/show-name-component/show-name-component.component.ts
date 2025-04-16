import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-show-name-component',
  imports: [],
  templateUrl: './show-name-component.component.html',
  styleUrl: './show-name-component.component.css'
})
export class ShowNameComponentComponent {
  name = "Имя";

  constructor(private activateRouter: ActivatedRoute,
              private router: Router
  ){
    this.name = activateRouter.snapshot.params['name'];
  }

  goMain(): void{
    this.router.navigateByUrl('/');
  }
}
