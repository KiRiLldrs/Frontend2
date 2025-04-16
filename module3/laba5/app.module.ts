import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { Page1Component } from './pages/page1/page1.component'
import { Page2Component } from './pages/page2/page2.component'
import { Page3Component } from './pages/page3/page3.component'
import { confirmInGuard } from './core/guards/confirm-in.guard'
import { confirmOutGuard } from './core/guards/confirm-out.guard'
import { DataService } from './core/services/data.service'
import { ItalicDirective } from './core/direcrive/italic.directive'
import { routes } from './app.routes'
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http'
import { ErrorInterceptor } from './core/interceptors/error.interceptor'

const appRoutes: Routes =[
    { path: 'page1', component: Page1Component, canActivate: [confirmInGuard] },
    { path: 'page2', component: Page2Component, canDeactivate: [confirmOutGuard] },
    { path: 'page3', component: Page3Component },
    { path: '', redirectTo: '/page1', pathMatch: 'full' }
]

@NgModule({
    declarations: [
        AppComponent,
        Page1Component,
        Page2Component,
        Page3Component,
        ItalicDirective
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot(appRoutes),
        HttpClientModule
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: ErrorInterceptor,
            multi: true
        }

    ],
    bootstrap: [AppComponent]
})
export class AppModule{}
