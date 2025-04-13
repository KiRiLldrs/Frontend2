import { Component, 
  OnInit, 
  OnChanges, 
  DoCheck, 
  AfterContentInit, 
  AfterContentChecked, 
  AfterViewInit, 
  AfterViewChecked, 
  OnDestroy,
  SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
selector: 'app-root',
imports: [FormsModule],
templateUrl: './app.component.html',
styleUrl: './app.component.css'
})
export class AppComponent implements 
OnInit, 
OnChanges, 
DoCheck, 
AfterContentInit, 
AfterContentChecked, 
AfterViewInit, 
AfterViewChecked, 
OnDestroy {

title = 'digital-departament-application';

greeting: string = "";
logMessages: string[] = [];

constructor() {
this.log('Constructor вызван');
}

ngOnInit(): void {
this.log('ngOnInit: Компонент инициализирован');
}

ngOnChanges(changes: SimpleChanges): void {
this.log(`ngOnChanges: Обнаружены изменения: ${JSON.stringify(changes)}`);
}

ngDoCheck(): void {
this.log('ngDoCheck: Проверка изменений');
}

ngAfterContentInit(): void {
this.log('ngAfterContentInit: Контент инициализирован');
}

ngAfterContentChecked(): void {
this.log('ngAfterContentChecked: Проверка контента завершена');
}

ngAfterViewInit(): void {
this.log('ngAfterViewInit: Представление инициализировано');
}

ngAfterViewChecked(): void {
this.log('ngAfterViewChecked: Проверка представления завершена');
}

ngOnDestroy(): void {
this.log('ngOnDestroy: Компонент будет уничтожен');
}

onSayHi(): void {
alert("Привет, " + this.greeting);
this.log(`Пользователь ввел: ${this.greeting}`);
}

private log(message: string): void {
this.logMessages.push(message);
console.log(message);
}
}